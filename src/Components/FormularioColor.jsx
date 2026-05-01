import React, { use } from "react";
import { useState, useEffect } from "react";

const FormularioColor = () => {
  const arrayColoresLocalStorage =
    JSON.parse(localStorage.getItem("colores")) || [];
  const [arrayColores, setArrayColores] = useState(arrayColoresLocalStorage);
  const [color, setColor] = useState("");

  useEffect(() => {
    localStorage.setItem("colores", JSON.stringify(arrayColores));
  }, [arrayColores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validamos el color
    const colorBuscado = arrayColores.find(
      (itemColor) => itemColor.toLowerCase() === color.toLowerCase().trim(),
    );
    console.log(colorBuscado);

    if (colorBuscado) {
      return alert("El color ingresado ya existe");
    }
    //agregar la "color" dentro del arrayColores
    setArrayColores([...arrayColores, color.trim()]);
    //limpiar el input
    setColor("");

    return (
      <section>
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-2 align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese un color en inglés o su código hexadecimal"
              required
            />
            <button className="btn btn-primary">Agregar</button>
          </div>
        </form>
      </section>
    );
  };
};

export default FormularioColor;
