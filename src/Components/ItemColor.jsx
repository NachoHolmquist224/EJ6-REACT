import React from "react";

const ItemColor = ({ colorProps, borrarColorprops }) => {
  return (
    <article className="border rounded-3 p-3 text-center d-flex flex-column align-items-center gap-2">
      <h2>{colorProps.toUpperCase()}</h2>
      <div style={{backgroundColor: colorProps, height: "100px", width: "100px"}}>
      </div>
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
