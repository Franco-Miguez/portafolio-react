import TitleSection from './TitleSection'
import CardProject from './CardProject'

function Projects() {
  return (
    <article id='projects' className="min-h-screen pt-20 bg-gray-950 flex flex-col items-center">
      <TitleSection text="Projects"/>
      <CardProject
      title="Titulo"
      img="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      description="sdasdasdasdas asdasdasdasdasdsad adasdasda sdasdasdasdasdasdasdasd"
      languages={["1","2"]}
      linkGithub="https://github.com/"
      linkPage="franco-miguez.com"
      />
    </article>
  )
}
export default Projects