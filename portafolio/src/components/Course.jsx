import TitleSection from './TitleSection'
import {useContext} from 'react'
import {DataContext} from '../context/DataContext'
import LanguagesIcon from './LanguagesIcon'
import {SlBadge} from 'react-icons/sl'

function course() {
  const data = useContext(DataContext)
  data.courses = data.courses.sort((a, b) => a.end > b.end? -1 : 1)
  return (
    <section id='courses' className="min-h-screen py-20 bg-gray-950 flex flex-col items-center">
        <TitleSection text="Courses"/>
        {data.courses.map((course)=>{
          return (
            <a key={course.id} href={course.link} target='_blank' className='bg-gradient-to-br from-yellow-500 via-yellow-800 to-yellow-400 rounded-3xl border-4 border-yellow-800 w-3/4 my-2 p-4 flex flex-col items-center scale-90 hover:scale-100 hover:shadow-lg hover:shadow-yellow-300 transition-all duration-500'>
              <SlBadge fill="#422006" size={50} />
              <p className='text-black font-bold text-xl sm:text-2xl my-2 sm:my-4'>{course.title}</p>
              <img src={course.image} alt="" className='w-3/4 sm:w-60'/>
              <div className='flex my-2 text-3xl justify-around bg-yellow-950 rounded-3xl py-2 w-full'>
                {course.languages.map((language, index)=>{
                  return <LanguagesIcon key={index} name={language} shadow={true}/>
                })}
              </div>
            </a>
          )
        })}
    </section>
  )
}
export default course