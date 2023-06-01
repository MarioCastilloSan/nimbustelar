import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <WhatsAppIcon onClick={() => window.open('', '_blank')}/>
            <LinkedInIcon onClick={() => window.open('', '_blank')} />
        </div>
        <p>&copy; 2023 Nimbustelar</p>
    </div>
  )
}

export default Footer