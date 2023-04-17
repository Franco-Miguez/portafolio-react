import {useContext} from 'react'
import TitleSection from './TitleSection'
import CardProject from './CardProject'
import {DataContext} from '../context/DataContext'

function Projects() {
  /*
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("./data.json")
      const json = await response.json()
      setData(json.projects.sort((a,b)=>{
        return a.create > b.create ? -1 : 1
      }))
  }
  fetchData()
  },[])
  */
  const data = useContext(DataContext)
  data.projects = data.projects.sort((a, b) =>a.create < b.create ? 1 : -1)

  return (
    <article id='projects' className="min-h-screen py-20 bg-gray-950 flex flex-col items-center ">
      <TitleSection text="Projects"/>
      <div className='flex mt-10 flex-wrap gap-10 justify-center'>
        {data.projects.map((project) =>(
          <CardProject
          key={project.id}
            id={project.id}
            title={project.title}
            img={project.image}
            create={project.create}
            description={project.description}
            languages={project.languages}
            links={project.links}
            />
        ))}
      </div>
    </article>
  )
}
export default Projects