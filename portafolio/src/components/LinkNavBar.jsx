function LinkNavBar({ text, link, changeMenu }) {
    return (
        <li className="w-full text-center">
            <a
                onClick={changeMenu}
                className="block text-xl py-2 lg:hover:shadow-md lg:hover:shadow-cyan-300 lg:hover:bg-cyan-600"
                href={link}
            >
                {text}
            </a>
        </li>
    );
}
export default LinkNavBar;
