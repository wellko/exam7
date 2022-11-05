import React from "react";
import {ButtonObj,} from "../../types";

interface Buttonprops {
    props:ButtonObj[],
}


const Menu:React.FC<Buttonprops>= (props) => {

   const menu = props.props.map((item, index) =>  (
        <button className='MenuBtn' onClick={item.add} key={index}><img alt='some pic' src={item.image}/> {item.desc}  <p>price : {item.price} KGS</p></button>
    ))
    return(<div className='Menu'>
        {menu}
    </div>
    )}

export default Menu