import { useContext } from "react";
import TitleSection from "./TitleSection";
import {DataContext} from '../context/DataContext'
import LanguagesIcon from './Icon'

function Skills() {
    const data = useContext(DataContext)
    return (
        <section
            id="skills"
            className="bg-gray-900 min-h-screen px-10 flex flex-col items-center gap-5 py-20"
        >
            <TitleSection text="Skills" />
            <div className="flex justify-around items-center flex-wrap gap-10 lg:gap-20 grow ">
                {data.skills.map((skill,index) => (
                <div key={index}
                className="text-[100px] md:text-[200px] scale-75 hover:scale-100 transition-transform duration-500">
                    <LanguagesIcon
                    name={skill}
                    shadow={true}
                    />
                </div>)
                )}
            </div>
        </section>
    );
}
export default Skills;
