import React from 'react'
import "./Dock.scss"
const Dock = () => {
  return (
        <footer className='dock'>
            
            <div className='icons github'><img src="/docs-icons/github.svg" alt="" /></div>
            <div className='icons notes'><img src="/docs-icons/note.svg" alt="" /></div>
            <div className='icons pdf'><img src="/docs-icons/pdf.svg" alt="" /></div>
            <div className='icons calender'><img src="/docs-icons/calender.svg" alt="" /></div>
            <div className='icons spotify'><img src="/docs-icons/spotify.svg" alt="" /></div>
            <div className='icons mail'><img src="/docs-icons/mail.svg" alt="" /></div>
            <div className='icons link'><img src="/docs-icons/link.svg" alt="" /></div>
            <div className='icons cli'><img src="/docs-icons/cli.svg" alt="" /></div>
        </footer>
  )
}

export default Dock