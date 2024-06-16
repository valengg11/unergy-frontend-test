import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ project }) {
  const {
    nombre_corto_l,
    project_file,
    porc_avance_financiacion,
    rentabilidad,
    id_caracterizacion,
    fecha_inicio_rentabilidad
  } = project;

  const formatToThreeDecimals = numStr => {
    let formattedNumber;

    const num = numStr;
    if (num === 0) {
      formattedNumber = numStr;
    } else {
      formattedNumber = num.toFixed(3);
    }

    return formattedNumber;
  };

  return (
    <div className="project_card">
      <div className="title-container">
        <h2>
          {nombre_corto_l[0].text}
        </h2>
      </div>
      <div className="image-container">
        <img src={project_file[0].nomfile_img} alt={nombre_corto_l[0].text} />
        <div className="financiacion-container">
          <p>
            {porc_avance_financiacion}%
          </p>
          <p>Financiación</p>
        </div>
      </div>

      <div className="card-content">
        <p>
          <b>Rentabilidad estimada:</b> {formatToThreeDecimals(rentabilidad)}
        </p>
        <p>
          <b>Localización:</b> {id_caracterizacion.ciudad}
        </p>
        <p>
          <b>Fecha de inicio de rentabilidad:</b> {fecha_inicio_rentabilidad}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
