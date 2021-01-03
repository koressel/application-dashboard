import React from "react";

export default class Applications extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        test: "123"
      };
  
    }
    
    render() {
      return (
        <div id="applications">
            {this.props.applications}
        </div>
      );
    }
  }