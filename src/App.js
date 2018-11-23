import React, { Component } from "react";
import { base } from "./base";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // An array of the data fetched from the API
      isLoaded: false // Know when items have been loaded from the API
    };
  }

  componentDidMount() {
    // Create API call and get data
    var url =
      "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=b1a862ea61734f4ea8901f47b021a35e";
    fetch(url)
      .then(res => res.json()) // Get the results (or response) and convert to JSON format
      .then(json => {
        this.setState({
          isLoaded: true, // Data has been loaded
          items: json // Set items state to json (data)
        });
      });
  }

  render() {
    // Access the props inside the state
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      // Display a message if not loaded
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Google News</h1>
          <ul className="news__list">
            {items.articles.map((item, index) => (
              <li id={index} key={index} className="news__article">
                <a href={item.url}>{item.title}</a>
                <button className="button">Save</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
export default App;
