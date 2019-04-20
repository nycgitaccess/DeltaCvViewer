import React from 'react';
import './box.css'


function CvBox(props){
    
    // let img = props.cvSummery.img
    // console.log(img)
    return(
        <div >
        <div>
            img
        {/* <img src= className='profilePic' alt={props.cvSummery.name} key='profilePic'></img> */}
        </div>
            discription 
            {/*             
            <h4>{props.cvSummery.name}</h4>
            <p className='cvSummery' id = "cvSummery" key='profil'>
                {props.cvSummery.summary}
            </p> */}
        </div>
    )
}
export default CvBox