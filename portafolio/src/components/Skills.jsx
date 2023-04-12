import { useState, useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
    SiCss3,
    SiJavascript,
    SiPython,
    SiJson,
    SiTailwindcss,
} from "react-icons/si";
import { DiReact } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import IconSkill from "./IconSkills";
import TitleSection from "./TitleSection";

function Skills() {
    return (
        <section
            id="skills"
            className="bg-gray-900 min-h-screen px-10 flex flex-col items-center gap-5 pt-20"
        >
            <TitleSection text="Skills" />
            <div className="flex justify-around items-center flex-wrap gap-10 lg:gap-20 grow">
                <IconSkill
                    Icon={AiFillHtml5}
                    color="#991b1b"
                    shadowColor="#fca5a5"
                />
                <IconSkill
                    Icon={SiCss3}
                    color="rgb(8 145 178)"
                    shadowColor="rgb(21 94 117)"
                />
                <IconSkill
                    Icon={SiJavascript}
                    color="#ca8a04"
                    shadowColor="#fef08a"
                />
                <IconSkill
                    Icon={SiPython}
                    color="#166534"
                    shadowColor="#86efac"
                />
                <IconSkill
                    Icon={SiJson}
                    color="#2e1065"
                    shadowColor="#a78bfa"
                />
                <IconSkill
                    Icon={DiReact}
                    color="rgb(8 145 178)"
                    shadowColor="rgb(21 94 117)"
                />
                <IconSkill
                    Icon={BsBootstrapFill}
                    color="#2e1065"
                    shadowColor="#a78bfa"
                />
                <IconSkill
                    Icon={SiTailwindcss}
                    color="rgb(8 145 178)"
                    shadowColor="rgb(21 94 117)"
                />
            </div>
        </section>
    );
}
export default Skills;
