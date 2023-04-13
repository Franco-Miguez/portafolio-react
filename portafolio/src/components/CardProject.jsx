function CardProject({img, title, description, languages, linkGithub, linkPage}) {
  return (
    <div className="bg-gray-900 p-5 h-96 w-3/4 sm:w-64 rounded-xl shadow-md hover:shadow-lg hover:shadow-cyan-600 shadow-red-500 flex flex-col items-center transition-all duration-500">
        <header>
            <img className="rounded-2xl shadow-md shadow-gray-950" src={img} alt="" />
            <h3>{title}</h3>
        </header>
        <section>
            {description}
        </section>
        <footer>
            {languages}
            {linkGithub}
            {linkPage}
        </footer>
    </div>
  )
}
export default CardProject