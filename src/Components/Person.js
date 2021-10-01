import React, { Component } from "react";
import data from "../data";

export default class Person extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="content">
        <div className="info">
          <h1 id="fullname">
            {data[0].name.first}
            {data[0].name.last}
          </h1>
          <h1 id="city" className="info-title">
            From:
            <p className="text-small">
              {data[0].city}, {data[0].country}
            </p>
          </h1>
          <h1 id="title" className="info-title">
            Title: <p className="text-small">{data[0].title}</p>
          </h1>
          <h1 id="employer" className="info-title">
            Employer: <p className="text-small">{data[0].employer}</p>
          </h1>
          <ol id="favmovie">
            <h1>Favorite Movies:</h1>
            <li className="movie">{data[0].favoriteMovies[0]}</li>
            <li className="movie">{data[0].favoriteMovies[1]}</li>
            <li className="movie">{data[0].favoriteMovies[2]}</li>
          </ol>
        </div>
        <aside className="index-number">
          <h1>{data[0].id}/25</h1>
        </aside>
      </div>
    );
  }
}
