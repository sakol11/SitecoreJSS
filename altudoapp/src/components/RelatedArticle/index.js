import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
class RelatedArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articleList: [],
      inComingProps: props,
    };
  }
  getArticles = () => {
    fetch('/altudoapi/GetArticles')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articleList: result,
            inComingProps: this.props,
          });
        },
        (error) => {
          this.setState({
            error,
            isLoaded: false,
          });
        }
      );
  };
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>
            <Text field={this.state.inComingProps.fields.RelatedArticle} />
            <input type="button" onClick={this.getArticles} value="showArticles" />
            <div>error occured</div>
          </h1>
        </div>
      );
    } else if (!this.state.isLoaded) {
      return (
        <div>
          <h1>
            <Text field={this.state.inComingProps.fields.RelatedArticle} />
            <input type="button" onClick={this.getArticles} value="showArticles" />
            <div>loading...</div>
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            <Text field={this.state.inComingProps.fields.RelatedArticle} />
            <input type="button" onClick={this.getArticles} value="showArticles" />
            <ul>
              {this.state.articleList.map((item) => (
                <li key={item.Name}>
                  <div>{item.Title}</div>
                  <br />
                  <div>{item.Breif}</div>
                  <img style={{ width: '300px' }} src={item.ImageUrl} alt={item.Title}></img>
                </li>
              ))}
            </ul>
          </h1>
        </div>
      );
    }
  }
}

export default RelatedArticle;
