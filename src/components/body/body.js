import React from 'react';
import './body.css'


function Body(props){
    return(
        <div className='cvBox col-12 offset-1 col-sm-11' key={props.cvSummery.id}>
            <a href='/pdf'>
                <img src={props.cvSummery.img} className='profilePic' alt={props.cvSummery.name} key={`${props.cvSummery.id}.1`}></img>
            </a>
            <h4 key={`${props.cvSummery.id}.2`}>{props.cvSummery.name}</h4>
            <p className='cvSummery d-none d-sm-block' id = "cvSummery" key={`${props.cvSummery.id}.3`}>
                {props.cvSummery.summary}
            </p>
        </div>
    )
}
export default Body