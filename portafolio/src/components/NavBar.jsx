import {useState} from 'react'
import iconImage from '../assets/img/icon.svg'
import {GiHamburgerMenu} from 'react-icons/gi'

function NavBar() {
    const [burgerActivate, setBurgerActivate] = useState(false)

    return<nav className="flex flex-col bg-gray-900 h-15">
        <div className='flex justify-around mt-4 mb-4 '>
            <div className='flex gap-2'>
                <img src={iconImage} alt="icon" className="h-7" />
                <span className='text-xl'>Franco Miguez</span>
            </div>
            <button onClick={()=> setBurgerActivate(!burgerActivate)} className='lg:hidden'><GiHamburgerMenu size={30}/></button>
        </div>
        <div className={`flex flex-col ${burgerActivate? '': 'hidden'}`}>
            <ul className="flex flex-col md:flex-row text-center gap-4 pb-4">
                <li><a href="./">Home</a></li>
                <li><a href="./#projects">Projects</a></li>
                <li><a href="./#experience">Experience</a></li>
                <li><a href="./#course">Course</a></li>
                <li><a href="./#skill">Skill</a></li>
            </ul>
            <button className="mb-4 mx-auto p-2 bg-blue-700 rounded-lg ">Resume</button>
        </div>
    </nav>
}
export default NavBar;
