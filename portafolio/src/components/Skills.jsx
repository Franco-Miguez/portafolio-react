import {useState,useEffect} from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3, SiJavascript, SiPython, SiJson, SiTailwindcss} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {BsBootstrapFill} from 'react-icons/bs'
import IconSkill from './IconSkills'


function Skills() {

    const [sizeNormal, setSizeNormal] = useState(50)
    const [sizeBig, setSizeBig] = useState(100)
    const [isMobile, setIsMobile] = useState(false)

  return (
    <section id='skills' className='bg-gray-950 min-h-screen px-10 flex flex-col items-center gap-5 pt-20'>
        <h2 className='text-xl   font-bold md:text-3xl' >Skills:</h2>
        <div className='flex justify-around items-center flex-wrap gap-10 grow'>
            <IconSkill Icon={AiFillHtml5} sizeNormal={sizeNormal} sizeBig={sizeBig}  color="#991b1b" shadowColor="#fca5a5"/>
            <IconSkill Icon={SiCss3} sizeNormal={sizeNormal} sizeBig={sizeBig}  color="rgb(8 145 178)" shadowColor="rgb(21 94 117)"/>
            <IconSkill Icon={SiJavascript} sizeNormal={sizeNormal} sizeBig={sizeBig}  color="#ca8a04" shadowColor="#fef08a"/>
            <IconSkill Icon={SiPython} sizeNormal={sizeNormal} sizeBig={sizeBig}  color="#166534" shadowColor="#86efac"/>
            <IconSkill Icon={SiJson} sizeNormal={sizeNormal} sizeBig={sizeBig}  color="#2e1065" shadowColor="#a78bfa"/>
            <IconSkill Icon={DiReact} sizeNormal={sizeNormal} sizeBig={sizeBig}  color="rgb(8 145 178)" shadowColor="rgb(21 94 117)"/>
            <IconSkill Icon={BsBootstrapFill} sizeNormal={sizeNormal} sizeBig={sizeBig}  color="#2e1065" shadowColor="#a78bfa"/>
            <IconSkill Icon={SiTailwindcss} sizeNormal={sizeNormal} sizeBig={sizeBig}  color="rgb(8 145 178)" shadowColor="rgb(21 94 117)"/>
        </div>
    </section>
  )
}
export default Skills