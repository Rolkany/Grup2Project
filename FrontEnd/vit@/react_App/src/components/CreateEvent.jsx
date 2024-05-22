import React from "react";
import "./CreateEvent.css";
import { useState } from "react";
import Select from "react-select";
import { languageOptions } from "./data/languageOptions";
import { locationOptions } from "./data/locationOption";

function CreateEvent() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = event => {
    const files = Array.from(event.target.files);
    const currentFiles = selectedFiles.length;
    const newFiles = files.slice(0, 5 - currentFiles);
    setSelectedFiles(prevFiles => [...prevFiles, ...newFiles].slice(0, 5));
  };

  return (
    <>
      <form action="">
        <div className="half">
          <div className="item">
            <h2>CRETE EVENT</h2>
          </div>

          <div className="item">
            <label htmlFor="file-upload" className="custom-file-upload">
              Upload Pictures
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="full">
          <div className="action">
            {selectedFiles.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Preview ${index}`}
                className="preview-img"
              />
            ))}
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
    </>
  );
}

export default CreateEvent;
