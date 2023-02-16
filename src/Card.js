import React from "react";

export default function Card({ id, title, img, code, preview }) {
  return (
    <div className="card">
      <img className="image" src={img} alt="project" />
      <h2 className="title">{title}</h2>
      <div className="btns">
        <button className="btn code">
          <a href={code}>Code</a>
        </button>
        <button className="btn preview">
          <a href={preview}>Preview</a>
        </button>
      </div>
    </div>
  );
}
