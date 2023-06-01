import React from 'react'
import '../styles/Experiencia.css'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
function Perfil() {
  return (
    <div className='home'>
    <div className='about'>
      <h2>Liderazgo</h2>
      <div className='prompt '>
        <p>
        Director Laboral - Miembro del Directorio Caja de Compensación y Asignación Familiar La Araucana,
        participando activamente de los comites de Beneficios, Riesgos y Auditoría.
        </p>
        <p>
        Jefe del Departamento de Recursos Humanos de la Fundación de
Desarrollo Educacional y Tecnológico La Araucanía (FUDEA-UFRO).
        </p>
         <p>
                  Participa activamente del Comité Paritario de Higiene y Seguridad de
            FUDEA-UFRO.
            </p>
            <p>
            Presidente del Comité Bipartito de Capacitación de FUDEA-UFRO

                    </p>
                    </div>
    </div>
    <div className='skills'>
      <h1>Cursos y Diplomados</h1>
      <ol className='list'>
        <li className='item'>
         <h2>  <AutoAwesomeIcon/> Legislación laboral aplicada</h2>
        </li>
        <li className='item'>
          <h2> <AutoAwesomeIcon/> Legislación laboral y tributaria </h2>
        </li>
        <li className='item'>
          <h2> <AutoAwesomeIcon/> Liquidación y cálculo de remuneraciones </h2>
        </li>
        <li className='item'>
          <h2> <AutoAwesomeIcon/>  Técnicas para la negociación efectiva </h2>
        </li>
        <li className='item'>
          <h2>  <AutoAwesomeIcon/> Auditor interno ISO 9001 </h2>
        </li>
        <li className='item'>
          <h2>  <AutoAwesomeIcon/> Técnicas de reclutamiento y selección de personal por competencia </h2>
        </li>
        <li className='item'>
          <h2> <AutoAwesomeIcon/> Diplomado de Liderazgo social</h2>
        </li>
      </ol>
    </div>
</div>
  )
}

export default Perfil
