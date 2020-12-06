import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    applications: [],
  };

  componentDidMount() {
    fetch('/applications')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let applicationElements = data.map(app => {
        return (
          <div>
            <h1>{app.position}</h1>
            <h2>{app.company}</h2>
            <p>{app.date}</p>
            <label><input type="checkbox" checked={!!app.response}></input>&nbsp;Response</label>
            <label><input type="checkbox" checked={!!app.interview}></input>&nbsp;Interview</label>
            <label><input type="checkbox" checked={!!app.offer}></input>&nbsp;Offer</label>
            <p>{app.notes}</p>
          </div>
        )
      });
      this.setState({applications: applicationElements});
    });
  }
 
  render() {
    return (
      <div>
        <form id="new-application-form">
          <h1>Add New</h1>
          <p>
              <label for="company">Company</label><br/>
              <input name="company" type="text"/>
          </p>
          <p>
              <label for="position">Position</label><br/>
              <input name="position" type="text"/>
          </p>
          <p>
              <label for="date">Date</label><br/>
              <input name="date" type="date"/>
          </p>
          <label for="notes">Notes</label><br/>
          <textarea name="notes" rows="10"></textarea>
          <p>
              <button type="submit">Save</button>
              <button type="reset">Clear</button>
          </p>
        </form>
        <content>
         {this.state.applications}
        </content>
      </div>
    );
  }
}