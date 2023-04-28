import "./App.css";
import NavBar from './components/NavBar'
import Skills from "./components/Skills";
import Header from './components/Header'
import Projects from './components/Projects'
import Course from './components/Course'
import Footer from "./components/Footer"

function App() {
    return <>
        <NavBar/>
        <Header/>
        <Projects/>
        <Skills/>
        <Course/>
        <Footer/>
    </>;
}

export default App;
