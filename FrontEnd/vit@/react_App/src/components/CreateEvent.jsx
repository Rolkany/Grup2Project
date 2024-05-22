import React from "react";
import Select from "react-select";
import { languageOptions } from "../data/languageOptions";
import { locationOptions } from "../data/locationOption";
import "./CreateEvent.css";

function CreateEvent() {
  return (
    <div>
      <form action="">
        <div>
          <div className="half">
            <div className="item">
              <h1>EVENT DETAILS</h1>
            </div>
            <div className="action">
              <input type="foto" value="Choice Picture" />
            </div>
          </div>
        </div>
        <div className="half">
          <div className="item">
            <label>TITLE</label>
            <input type="text" id="title" />
          </div>
          <div className="item">
            <label>DATE</label>
            <input type="datetime-local" id="date" />
          </div>
        </div>
        <div className="half">
          <div className="item">
            <label>TYPE</label>
            <input type="text" id="type" />
          </div>
          <div className="item">
            <label>LANGUAGE</label>
            <Select
              isMulti
              name="languages"
              options={languageOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="full">
          <div className="item">
            <label>LOCATION</label>
            <Select
              isMulti
              name="location"
              options={locationOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="item">
            <label>EVENT DESCRIPTION</label>
            <textarea id="description"></textarea>
          </div>
        </div>
        <div className="action">
          <input type="reset" value="CANCEL" />
          <input type="submit" value="PREVIEW EVENT" />
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
