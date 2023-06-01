import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Bienvenida.css'

function Bienvenida() {

  return (
    <div className='home'>
        <div className='about'>
        <h2>Hola, somos Mario Castillo y Felipe Espinoza</h2>
          <div className='prompt '> <p>
                            Somos estudiantes de la carrera de Ing. Civil  Informática.
                        </p>
                        Si tienes alguna duda o deseas comunicarte con nosotros a nuestro correo.
                        <p className='email'> <EmailIcon onClick={() => window.open('mailto:contacto@nimbustelar.com', '_blank')}/></p>
                      
                        </div>
        </div>
        
        <div className='skills'>
          <h1>Habilidades</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Git, Diseño web, webmaster, diseño e implementacion de modelos de aprendizaje, SQL, MONGODB.</h2>
            </li>
          </ol>
        </div>
    </div>
 
  )
}

export default Bienvenida