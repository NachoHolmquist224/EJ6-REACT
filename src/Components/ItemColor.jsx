import React from "react";

const ItemColor = ({ colorProps, borrarColorprops }) => {
  return (
    <article className="border rounded-3 p-3">
      <h2>{colorProps}</h2>
      <span style={{backgroundColor: colorProps}}></span>
      <button
        className="btn btn-danger mt-3"
        onClick={() => borrarColorprops(colorProps)}
      >
        Borrar color
      </button>
    </article>
  );
};

export default ItemColor;
