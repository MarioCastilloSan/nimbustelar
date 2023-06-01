import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import '../styles/Experiencia.css';
function Experiencia() {
  return (
    <div className='experience'>
      <div className='skills'>
          <h1>Experiencia Laboral</h1>
          </div>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='Marzo 2020 a la fecha'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<GroupsIcon/>}
          >
            <h3 className='vertical-timeline-element-title'>Director Laboral – Miembro del Directorio</h3>
            <p> Caja de Compensación La Araucana</p>
            </VerticalTimelineElement> 

            <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='Octubre 2005 a la fecha'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon/>}
          >
            <h3 className='vertical-timeline-element-title'>Jefe Depto. de RRHH </h3>
            <p> FUDEA UFRO</p>
            </VerticalTimelineElement> 



            <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='Mayo 2005 a Septiembre 2011'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<EqualizerIcon/>}
          >
            <h3 className='vertical-timeline-element-title'>Analista Depto. de RRHH</h3>
            <p> FUDEA UFRO</p>
            </VerticalTimelineElement> 

          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='Marzo 2004 a Abril 2005'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<PeopleAltIcon/>}
          >
            <h3 className='vertical-timeline-element-title'>Asistente Proyectos unidad de desarrollo institucional</h3>
            <p> Universidad de La Frontera</p>
            </VerticalTimelineElement> 
   
          


        

           
      </VerticalTimeline>


      <div className='skills'>
          <h1>Educacion</h1>
        </div>
        <VerticalTimeline lineColor='#3e497a'>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2021 a la fecha'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon/>}
          >
            <h3 className='vertical-timeline-element-title'>Carrera de Derecho </h3>
            <p> Universidad Autónoma sede Temuco</p>
            </VerticalTimelineElement> 


            <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2017'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon/>}
          >
            <h3 className='vertical-timeline-element-title'>Ingeniero de Ejecución en Administración de Empresas</h3>
            <p> Universidad de La Frontera Temuco</p>
            </VerticalTimelineElement> 




          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2012'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon/>}
          >
            <h3 className='vertical-timeline-element-title'>Técnico de Nivel Superior en Administración</h3>
            <p> CFT Teodoro Wickel</p>
            </VerticalTimelineElement> 
   
        

          

  
      </VerticalTimeline>
    </div>
    
  )
}

export default Experiencia