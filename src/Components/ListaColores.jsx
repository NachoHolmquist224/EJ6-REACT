import React from "react";
import ItemColor from "./ItemColor";

const ListaColores = ({ arrayColoresprops, borrarColor }) => {
  return (
    <section className="border rounded-3 p-3 mt-3">
      {arrayColoresprops.map((color, indice) => (
        <ItemColor
          key={indice}
          colorProps={color}
          borrarColorprops={borrarColor}
        ></ItemColor>
      ))}
    </section>
  );
};

export default ListaColores;
