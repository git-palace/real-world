import React from 'react';

class ArticleList extends React.Component {
  render() {
    if (!this.props.articles) {
      return (
        <div className="article-preview">Loading...</div>
      )
    }

    if (this.props.articles.length === 0) {
      return (
        <div className="article-preview">
          No articles are here... yet.
        </div>
      )
    }

    return (
      <div>
        {
          this.props.articles.map(article => {
            return (
              <h2>{article.title}</h2>
            );
          })
        }
      </div>
    )
  }
}

export default ArticleList;