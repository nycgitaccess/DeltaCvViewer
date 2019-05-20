import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import  "./Userprofile.css"

const Userprofile = (props)=>{
const Mystyle = {
  padding: "20px 20px 20px 20px",
    borderbottom: "1px ridge", 
    background: "lightblue",
    border: "solid #ffc787 2px"
}
  return(
    <div className=" container col-md-9 " style={Mystyle}>
      <h2>User profile</h2>
     <div className="thumbnail col-md-4 " >
        <Image width="100%" src={"https://scontent.fath6-1.fna.fbcdn.net/v/t1.0-9/13466022_265949933765485_2302318879502977296_n.jpg?_nc_cat=104&_nc_ht=scontent.fath6-1.fna&oh=c99dac87503db326fd8c65c761055e0b&oe=5D3C3803"} roundedCircle />
         <h3>victor unuese</h3>
         </div>
     <hr/>
     <div className="row ">
       <div className="col-4 offset-1 col-sm-2">first Name:</div><div className="col-7 col-sm-5"> victor </div>
     </div>
     <div className="row ">
       <div className="col-4 offset-1 col-sm-2">last Name:</div><div className="col-7 col-sm-5">Unuese</div>
     </div>
     <div className="row ">
       <div className="col-4 offset-1 col-sm-2">Date of birth:</div><div className="col-7 col-sm-5">1999/oct/7</div>
     </div>
     <div className="row ">
       <div className="col-4 offset-1 col-sm-2">Nationality:</div><div className="col-7 col-sm-5">Nigeria</div>
     </div>
     <div className="row ">
       <div className="col-4 offset-1 col-sm-2">other list:</div><div className="col-7 col-sm-5">Something </div>
     </div>
     <div className="row ">
       <div className="col-4 offset-1 col-sm-2">experience:</div><div className="col-7 col-sm-5">Database</div>
     </div>
     <div className="row ">
       <div className="col-4 offset-1 col-sm-2">first name:</div><div className="col-7 col-sm-5">victor</div>
     </div>
     <hr/>
     <div className="row col-7">
       <h4>description</h4>
       <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta earum quae temporibus enim deleniti sequi nam, inventore quidem optio consequatur, aliquid esse suscipit dicta numquam nostrum asperiores nulla atque sapiente.</p>
     </div>
     <div className="col-7 col-sm-5"><input type="file" name="file" />
       <input type="submit"></input>
       </div>
 
    </div>
  )

}

export default Userprofile;