import { useState, useEffect } from 'react';

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="filtro">Filtrar gastos</label>
          <select
            name="filtro"
            id="filtro"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripiones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
