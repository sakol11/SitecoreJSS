import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

class ArticleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      SearchKey: '',
      SearchResult: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange(event) {
    this.setState({
      SearchKey: event.target.value,
    });
  }

  handleSumbit(event) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ SearchKey: this.state.SearchKey }),
    };
    fetch('/altudoapi/StandardSearch', requestOptions)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({ SearchResult: result, isLoaded: true, error: null });
        },
        (error) => {
          this.setState({
            error,
            isLoaded: false,
            // SearchResult: [],
          });
        }
      );
  }
  render() {
    return (
      <div>
        <input type="text" id="txtsearch" onChange={this.handleChange}></input>
        <input type="submit" onClick={this.handleSumbit}></input>
        {this.state.SearchResult.map((res) => (
          <div key={res.SearchTitle}>
            <a href={res.SearchTitleUrl}>Article Link</a>
            <h3>{res.SearchTitle}</h3>
            <h4>{res.SearchDescription}</h4>
            <h5>speciality is : {res.Speciality}</h5>
            <img src={res.ImageUrl} alt={res.ImageUrl}></img>
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleSearch;
