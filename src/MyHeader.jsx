import React from "react";

export default class MyHeader extends React.Component {
  render() {
    return (
      <div>
        <h1> User Nmae is {this.props.user.name}</h1>
      </div>
    );
  }
}
