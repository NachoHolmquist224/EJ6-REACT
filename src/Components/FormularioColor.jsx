import React from "react";

const FormularioColor = () => {
  return (
    <section>
      <form>
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

export default FormularioColor;
