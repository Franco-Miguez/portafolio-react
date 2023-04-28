import {useState} from 'react'
import {BiLink} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import LanguagesIcon from './Icon'

function CardProject({img, title, description, languages, links, id, create}) {

  const [clickShowMore, setClickShowMore] = useState(false)

  const showMore = (text)=>{
    if(text.length > 100 && !clickShowMore){
      return `${text.substr(0,100)}...`
    }else return text
  }

  return (
    <div id={id} className={`bg-gray-900  w-3/4  rounded-xl shadow-md hover:shadow-lg hover:shadow-cyan-600 shadow-red-500 flex flex-col items-center transition-transform duration-500 scale-95 hover:scale-100 ${clickShowMore? "sm:w-full" :"sm:w-64"}`}>
        <header className="mx-3 justify-items-start my-3">
            <img className={`rounded-2xl shadow-lg shadow-gray-950 object-cover h-40 ${clickShowMore?"sm:h-80":""}`} src={img} alt="" />
            <h3 className="text-center font-bold py-3">{title}</h3>
        </header>
        <section className="mx-3 flex flex-col">
            <p className='text-gray-500 self-end'>{create}</p>
            {showMore(description)}
            <a href={"/#" + id} onClick={()=>setClickShowMore(!clickShowMore)} className={description.length > 100?'bg-cyan-500 my-2 rounded-lg py-1 hover:shadow-sm hover:shadow-cyan-300 hover:bg-cyan-800 text-center':'hidden'}>
              {clickShowMore?"Show Less": "Show More"}
            </a>
        </section>
        <footer className="bg-gray-950  rounded-b-xl w-full mt-auto">
            <div className="py-2 border-b-2 border-white text-3xl flex justify-center gap-5 flex-wrap">
              {languages.map((value,index)=> <div key={index}><LanguagesIcon name={value} shadow={true}/></div>)}
            </div>
            <div className="py-2">
              <ul className='flex justify-center text-5xl'>
                <li className={links.github?"" : "hidden"}>
                  <a target='_black' href={links.github}><AiFillGithub/></a>
                </li>
                <li className={links.page?"" : "hidden"}>
                  <a target='_black' href={links.page}><BiLink/></a>
                </li>
              </ul>
            </div>
        </footer>
    </div>
  )
}
export default CardProject