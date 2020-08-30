import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Header">
      <div className="row">
        <form>
          <div className="form-row">
            <div className="col-7">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter a city"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-light btn-sm"
              />
            </div>
          </div>
        </form>
        <div className="col-3">
          <div className="Units">
            <a href="/" className="celsius">
              <strong>ºC</strong>
            </a>{" "}
            |{" "}
            <a href="/" className="fahr">
              ºF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
