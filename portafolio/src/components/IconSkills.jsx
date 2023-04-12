import { useState } from "react";

function IconSkills({ Icon, color, shadowColor }) {
    const newStyle = (color, shadowColor) => {
        return {
            fill: color,
            filter: `drop-shadow(0 0 10px ${shadowColor})`,
            transition: "all 1s",
        };
    };

    return (
        <>
            <Icon
                style={newStyle(color, shadowColor)}
                className="text-[60px] hover:text-[100px] md:text-[120px] md:hover:text-[200px]"
            />
        </>
    );
}
export default IconSkills;
