import React from "react"
import "./Footer.css"

const Footer = ()=>{
    return(
        <div className=" ">
        <div class="footer">
        <div class="container">
            <div class="row">             
                <div class="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://www.instagram.com/socialhackersacademy/">Instagram</a></li>
                        <li><a href="https://www.facebook.com/socialhackersacademy/">Facebook</a></li>
                        <li><a href="https://www.linkedin.com/company/social-hackers-academy/">LinkedIn</a></li>
                        <li><a href="https://twitter.com/sochackacademy">Twitter</a></li>
                        <li><a href="https://www.youtube.com/channel/UCO6KKzoJGeG92XZoHqX7H2w?y">YouTube</a></li>
                    </ul>
                </div>
                <div class="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <div className="address">
                    Anaxagora 3-5, Romantso<br/>
                    (Office 204), Athens 105 52<br/>
		              Greece<br/>
		              Phone.: +30 210 30 03 124<br/>
		              Fax: +852 8765 4321<br/>
		              Email: <a >info (at) </a>
		           </div>
                </div>

                <div class="col-12 col-sm-4 align-self-center">
                    <div class="text-center">
                      Created @By Class Delta
                    </div>
                </div>
           </div>
           <div class="row justify-content-center">             
                <div class="col-auto">
                    <p>© Copyright 2019 ClassdeltaCvViewer</p>
                </div>
           </div>
        </div>
    </div>
        </div>
    )
}

export default Footer