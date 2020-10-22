import React from "react";

export default function Searchbar() {
  return (
    <div className="row Searchbar">
      <div className="col-12">
        <form id="search-form" className="input-group mb-3">
          <input
            type="text"
            className="form-control form"
            id="city-input"
            placeholder="search city"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2 search"
            >
              <span role="img" aria-label="magnifying-glass">
                🔍
              </span>
            </button>
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary gps-button"
              type="button"
              id="button-addon2 search gps-button"
            >
              current spot
              <span role="img" aria-label="current-spot">
                📍
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
