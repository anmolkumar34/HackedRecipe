import React,{useState, useEffect} from "react"
import { AiFillStar } from "react-icons/ai";

function Description({match}){
    useEffect(()=>{
        const fetchdata = async () =>{
        const res = await fetch('http://starlord.hackerearth.com/recipe')
        const jres = await res.json()
        setItem(jres)
        }
        fetchdata()
    },[])
    
    const [item,setItem]=useState([])

    let details =item.find((item)=>{
        return item.id == match.params.id
    })

    console.log(details)

    if(details)
    {
        let label = details.label ? details.label : null
        return(
            <div className="describe">
                <img src={details.image} alt={details.name}/>
                <div className="nameStar">
                    <h1>{details.name}</h1>
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <h3>Price : {details.price}$</h3>
                    <h3>{label} {details.category}</h3>
                    <h3>Description</h3>
                    <h4>{details.description}</h4>
                    <div className="mainCircle">
                       <div className="circle first">
                        <span>8</span><br/>Ingredients
                        </div>
                        <div className="circle second">
                            <span>220</span><br/>Calories
                        </div>
                        <div className="circle third">
                            <span>25</span><br/>Minutes
                        </div> 
                    </div>  
                    <hr></hr>
                    <form action="#">
                        <label for="name">ADD COMMENT</label>
                        <input type="text" id="comment" name="comment" placeholder="Type something here..."/>
                        <input type="submit" id="addComment" value="ADD COMMENT"/>
                    </form>
                </div>
                <div className="Extra">
                    <h3>Ingredients</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat
                        diam dolor, non vehicula massa egestas vel. Fusce malesuada, metus 
                        nec posuere feugiat, lorem lorem egestas sapien, a varius ligula tortor
                        vitae ipsum. Fusce placerat est ac ipsum condimentum, sed iaculis dolor
                        elementum. </p>
                </div>
            </div>        
        )
    }
    else{
        return null;
    }    
}

export default Description