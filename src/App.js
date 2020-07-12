import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    const { articles } = this.state;

    return (
      <div className="App">
        <h2>Billin code challenge</h2>

        <div className="row">
          { articles.map((article) =>

              <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={ article.id }>
                <div className="card m-3">
                  <div className="card-body">
                    <h5 className="card-title">{ article.title }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{ article.author }</h6>
                    <p className="card-text">{ article.excerpt }</p>
                  </div>
                </div>
              </div>

            )
          }
        </div>

      </div>
    );
  }
}

export default App;
