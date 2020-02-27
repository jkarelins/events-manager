import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventsList extends Component {
  render() {
    if (Array.isArray(this.props.events)) {
      return (
        <div>
          {this.props.events.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            <ul>
              {this.props.events.map(event => (
                <li key={event.id}>
                  <Link to={`/event/${event.id}`}>{event.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
