import React from 'react';

function ProjectCard ({ project }) {
  const {
    nombre_corto_l,
    project_file,
    porc_avance_financiacion,
    rentabilidad,
    id_caracterizacion,
    fecha_inicio_rentabilidad,
  } = project;

  return (
    <div className="project_card">
      <h2>{nombre_corto_l[0].text}</h2>
      <img src={project_file[0].nomfile_img} alt={nombre_corto_l[0].text} />
      <p>Porcentaje de financiación: {porc_avance_financiacion}%</p>
      <p>Rentabilidad estimada: {rentabilidad}</p>
      <p>Localización: {id_caracterizacion.ciudad}</p>
      <p>Fecha de inicio de rentabilidad: {fecha_inicio_rentabilidad}</p>
    </div>
  );
};

export default ProjectCard;

