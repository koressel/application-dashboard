import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch('/application')
      .then(response => {
        console.log(response)
        response.json();
      })
      .then(data => console.log(data));
  }
 
  render() {
    return (
      <div>
        <form></form>
        <content>
          <div>
            <h1>Title</h1>
            <h2>Company</h2>
            <p>Date Applied</p>
            <input type="checkbox">Response</input>
            <input type="checkbox">Interview</input>
            <input type="checkbox">Offer</input>
            <p>Job Posting Url</p>
            <p>Application Status Url</p>
            <p>Notes</p>
            <p>Resume/CV</p>
          </div>
        </content>
      </div>
    );
  }
}