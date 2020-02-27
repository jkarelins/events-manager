import React, { Component } from "react";

export default class EventForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            name="name"
            value={this.props.values.name}
            placeholder="Name"
            onChange={this.props.onChange}
          />
          <input
            name="date"
            value={this.props.values.date}
            placeholder="Date 2020-10-30"
            onChange={this.props.onChange}
          />
          <input
            name="description"
            value={this.props.values.description}
            placeholder="Description"
            onChange={this.props.onChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
