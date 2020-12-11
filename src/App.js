import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  componentDidMount() {
    fetch('/applications')
    .then(response => response.json())
    .then(data => {
      let applicationElements = data.map(app => {
        return (
          <div className="card">
            <h2>{app.position}</h2>
            <h3>{app.company}</h3>
            <p>{app.date}</p>
            <label><input type="checkbox" checked={!!app.response}></input>&nbsp;Response</label>
            <label><input type="checkbox" checked={!!app.interview}></input>&nbsp;Interview</label>
            <label><input type="checkbox" checked={!!app.offer}></input>&nbsp;Offer</label>
            <p>{app.notes}</p>
          </div>
        )
      });
      this.setState({applications: applicationElements});
      console.log(this.state.applications)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newApplicationForm = document.getElementById('new-application-form');
    const formData = parseFormData(newApplicationForm);
    const applicationElements = this.state.applications;

    postData('/new-application', formData)
      .then(response => {
        if(response.status == 200) {
          applicationElements.push(
            <div className="card">
              <h2>{formData.position}</h2>
              <h3>{formData.company}</h3>
              <p>{formData.date}</p>
              <label><input type="checkbox"></input>&nbsp;Response</label>
              <label><input type="checkbox"></input>&nbsp;Interview</label>
              <label><input type="checkbox"></input>&nbsp;Offer</label>
              <p>{formData.notes}</p>
            </div>);
            
            this.setState({applications: applicationElements});
        } else {
          console.log(response);
        }
      });

    function parseFormData(form) {
      const data = {};
      for (let i=0;i<form.elements.length-2;i++) {
        const e = form.elements[i];
        const inputName = e.getAttribute('name');
        data[inputName] = e.value;
      }
      return data;
    }

    async function postData(url, data) {
      const request = { 
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    }
      const response = await fetch(url, request)
      return response;
    }
  }
 
  render() {
    return (
      <div id="app">
        <form id="new-application-form">
          <h1>Add New</h1>
          <hr/>
          <p>
              <label for="company">Company</label><br/>
              <input name="company" type="text" value="Alltel"/>
          </p>
          <p>
              <label for="position">Position</label><br/>
              <input name="position" type="text" value="Developer"/>
          </p>
          <p>
              <label for="date">Date</label><br/>
              <input name="date" type="date" value="2018-07-13"/>
          </p>
          <label for="notes">Notes</label><br/>
          <textarea name="notes" rows="10" cols="40">
            This is a test.
          </textarea>
          <p>
              <button type="submit" onClick={this.handleSubmit}>Save</button>
              <button type="reset">Clear</button>
          </p>
        </form>
        <content id="applications">
          <h1>Applications</h1>
          <hr/>
         {this.state.applications}
        </content>
      </div>
    );
  }
}