import protraitImage from '../assets/img/portrait.jpg'
import iconImage from '../assets/img/icon.svg'
import TitleSection from './TitleSection'

function Header() {
    return (
    <header id="i" className="min-h-screen pt-20 bg-gray-900 flex flex-col items-center">
        <div className='relative w-3/4 md:w-2/5  bg-black rounded-full shadow-lg shadow-cyan-500'>
            <img className='absolute' src={iconImage} alt="" />
            <img src={protraitImage} alt="frontal photo" className='rounded-full  hover:opacity-0  transition-all relative z-0 duration- '/>
        </div>
        <div className='my-10 lg:my-20 bg-gray-950 p-5 lg:p-10 rounded-2xl shadow-lg shadow-cyan-500'>
            <h1 className="font-bold text-sky-300 text-3xl text-center md:text-5xl pt-5">Franco Miguez</h1>
            <TitleSection text="Fontend Developer | Python Developer"/>
        </div>
    </header>);
}
export default Header;
