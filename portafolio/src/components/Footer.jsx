import {useContext} from 'react'
import {DataContext} from '../context/DataContext'
import Icon from './Icon'

function course() {
  const data = useContext(DataContext)
  data.courses = data.courses.sort((a, b) => a.end > b.end? -1 : 1)
  return (
    <section id='courses' className="min-h-screen py-20 bg-gray-900 flex flex-col md:flex-row justify-around gap-5 items-center text-8xl">
      <a href="mailto:contacto@franco-miguez.com">
        <Icon name="Email" shadow={true}/>
      </a>
      <a href="https://linkedin.com/in/franco-miguez-a0824b21a" target='_blank'>
        <Icon name="Linkedin" shadow={true}/>
      </a>
      <a href="https://github.com/Franco-Miguez" target='_blank'>
        <Icon name="GitHub" shadow={true}/>
      </a>
      <a href="http://qr.afip.gob.ar/?qr=8WBTvIncFYEs5krKGUF5yg,," target="_F960AFIPInfo"><img src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg" border="0"/></a>
    </section>
  )
}
export default course