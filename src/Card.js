import React,{ useState } from "react"
import { Link } from 'react-router-dom'

function Card(props){   
    const [modalIsOpen, setModalIsOpen] = useState(false) 
    return (
        <div className="masonryblocks">
            <h3 className="category">{props.cardDetails.category}</h3>
            <img src={props.cardDetails.image} alt={props.cardDetails.name}/>
            <p>{props.cardDetails.name}</p> 
            <div className="Overlay"></div>
            <div className="OverlayHover">
                <Link to={`/${props.cardDetails.id}`} style={{textDecoration:"none"}} >
                    <a className="Desc one">VIEW MORE</a> 
                </Link>   
            </div>                                
        </div>        
    )
}

export default Card