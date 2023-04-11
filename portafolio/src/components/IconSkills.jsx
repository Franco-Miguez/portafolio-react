import {useState} from 'react'

function IconSkills({Icon, sizeNormal, sizeBig,color, shadowColor}) {
    const [size, setSize] = useState(sizeNormal)
    const newStyle = (color, shadowColor) =>{return {fill:color, filter: `drop-shadow(0 0 10px ${shadowColor})`, transition:"all 1s"}}

  return (
    <>
        <Icon
        onMouseOut={()=> setSize(sizeNormal)}
        onMouseOver={()=> setSize(sizeBig)}
        size={size} style={newStyle(color,shadowColor)}/>
    </>
  )
}
export default IconSkills