import {AiFillHtml5} from 'react-icons/ai'
import {
    SiCss3,
    SiJavascript,
    SiPython,
    SiJson,
    SiTailwindcss,
    SiDjango,
} from "react-icons/si";
import { DiReact } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";

function LanguagesIcon({name, shadow}) {
    const green = ["#166534","#bbffd3"]
    const yellow = ["#ca8a04","#fef08a"]
    const blue = ["#14ffff","#36f0ff"]
    const violet = ["#2e1065","#a78bfa"]
    const red = ["#991b1b","#fca5a5"]
    const languagesIcon = (name) => {
        switch (name) {
            case "Python":
                return <SiPython
                style={{
                    fill: green[0],
                    filter: `${shadow?`drop-shadow(0 0 .1em ${green[1]})`: "none"}`}}
                />;
            case "Javascript":
                return <SiJavascript
                style={{
                    fill: yellow[0],
                    filter: `${shadow?`drop-shadow(0 0 .1em ${yellow[1]})`: "none"}`}}
                />;
            case "CSS":
                return <SiCss3
                style={{
                    fill: blue[0],
                    filter: `${shadow?`drop-shadow(0 0 .1em ${blue[1]})`: "none"}`}}
                />;
            case "Json":
                return <SiJson
                style={{
                    fill: violet[0],
                    filter: `${shadow?`drop-shadow(0 0 .1em ${violet[1]})`: "none"}`}}
                />;
            case "Tailwindcss":
                return <SiTailwindcss
                style={{
                    fill: blue[0],
                    filter: `${shadow?`drop-shadow(0 0 .1em ${blue[1]})`: "none"}`}}
                />;
            case "HTML":
                return <AiFillHtml5
                style={{
                    fill: red[0],
                    filter: `${shadow?`drop-shadow(0 0 .1em ${red[1]})`: "none"}`}}
                />;
            case "React":
                return <DiReact
                style={{
                    fill: blue[0],
                    filter: `${shadow?`drop-shadow(0 0 .1em ${blue[1]})`: "none"}`}}
                />;
            case "Bootstrap":
                return <BsBootstrapFill
                style={{
                    fill: violet[0],
                    filter: `${shadow?`drop-shadow(0 0 .1em ${violet[1]})`: "none"}`}}
                />;
            case "Django":
                return <SiDjango
                style={{
                    fill: green[0],
                    filter: `${shadow?`drop-shadow(0 0 .1em ${green[1]})`: "none"}`}}
                />;
        }
    };
    return <>{languagesIcon(name)}</>;
}
export default LanguagesIcon;
