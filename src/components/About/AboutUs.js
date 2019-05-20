import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import "./AboutUs.css"
 import AboutData  from "./AboutData"

const AboutUs = (props) => {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
      <h1>Class delta team</h1>
      this project Hasanu, Mohammed, Liberrty, Victor, Dimitris and Ourania classmates in class Delta worked together for six weeks. Our predefined full-stack project was to develop an application that each student of the Social Hackers Academy, as well as professionals of any coding related field to upload their CVs on the platform. During the development process, we came up with various technical ideas, using all the skills we acquired during our program. During weekly sprints, we have been guided by Guru Zohir who inspired us, guided us, helped us dispel misunderstandings and shared his valuable knowledge with the team.
      </div>
      <div id="first">
    <CardDeck>
      <Card>
        <CardImg top width="80%"src="https://scontent.fath6-1.fna.fbcdn.net/v/t1.0-9/13466022_265949933765485_2302318879502977296_n.jpg?_nc_cat=104&_nc_ht=scontent.fath6-1.fna&oh=c99dac87503db326fd8c65c761055e0b&oe=5D3C3803" alt="Card image cap" />
        <CardBody>
          <CardTitle>Hasanu Zzaman</CardTitle>
          <CardSubtitle>Graduate of social hackers.</CardSubtitle>
          <CardText>Hasanu Zzama he's one of the student that contributed to this project with his help we able to set out the body of the page and other functionality like the router and others , he,s also one of the graduate of social hackers academy.</CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="80%" src="https://media.licdn.com/dms/image/C4E03AQHb1V8S7vKLCA/profile-displayphoto-shrink_800_800/0?e=1560988800&v=beta&t=-3KELNe4Wc75HGZ6CntJh-BejPO_tiGI9lqe_v0-xao" alt="Card image cap" />
        <CardBody>
          <CardTitle>Victor Unuese</CardTitle>
          <CardSubtitle>Graduate of social hackers.</CardSubtitle>
          <CardText> Victor unuese is also one of the student of social hackers , with is ideal and we alble to make the Application  sketch , also contributed to various functionality of the Application like  the about page and others  .</CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="80%"  src="https://media.licdn.com/dms/image/C5603AQHwH6mpuTb2qA/profile-displayphoto-shrink_800_800/0?e=1563408000&v=beta&t=QqDWlVGXQax4IsVaDtwkQwcw4XLhXH5zDLgpLj7ljdk" alt="Card image cap" />
        <CardBody>
          <CardTitle>Dimitris Kokoutsidis</CardTitle>
          <CardSubtitle> Graduate of social hackers.</CardSubtitle>
          <CardText>Experienced Owner with a demonstrated history of working in the computer software industry. Skilled in Customer Service, Sales, Strategic Planning, Filemaker, and Social Media.. contributed genrally to every part of the application and help make some basic structures </CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="80%"  src="https://media.licdn.com/dms/image/C4E03AQHzP9Q14d1zhw/profile-displayphoto-shrink_800_800/0?e=1563408000&v=beta&t=cA99qLpOSxM4C4QIG2pFvvGsQddFPajGIkzPaVs7biQ" alt="Card image cap" />
        <CardBody>
          <CardTitle>Mohammed Alabdali</CardTitle>
          <CardSubtitle>Graduate of social hackers.</CardSubtitle>
          <CardText>Mohammed Alabdali is also a graduate of socaial hackers help contributed on various aspect with is help we are able to set out the backend of these application and make other functionality like the authetication .</CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
    <hr/>
    <div id="two">
    <CardDeck>
    <Card>
        <CardImg top width="80%"  src="http://www.quickfileupload.com/wp-content/uploads/2018/09/photo-to-pencil-sketch-turn-your-photo-into-a-graphite-pencil-sketch-online-phone-wallpapers-and-themes.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Ourania Pouta</CardTitle>
          <CardSubtitle>Graduate of social hackers.</CardSubtitle>
          <CardText>Ourania Pouta is also a student of social hackers with his help we able to write some of ducumentation is ideal has contributed to the project on various aspect .</CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="80%"  src="https://media.licdn.com/dms/image/C5603AQFsrS9VQbUcvw/profile-displayphoto-shrink_800_800/0?e=1563408000&v=beta&t=k6Vo46bsmqEbPo1xT1zwro31zhgdN3_ErRDfOplQemM" alt="Card image cap" />
        <CardBody>
          <CardTitle>Zohir RayhanMollah</CardTitle>
          <CardSubtitle>Project supervisor.</CardSubtitle>
          <CardText>Computer Science fascinates me because with code we can create anything we want. Java, HTML, CSS, and JavaScript are my passion. I have contributed in product design, App creation, Software development and with several state-of-the-art web products..</CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="80%"  src="https://i.pinimg.com/originals/6b/c4/c6/6bc4c62c19941202af2094815eb5f9a5.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Etuonu O. Liberrty</CardTitle>
          <CardSubtitle>Graduate of social hackers.</CardSubtitle>
          <CardText>Etuonu O. Liberrty is also  one of developers  of the project wwith is help we able to set the cakend , and also contributed to  drop menu and other functionality .</CardText>
          <Button>Github</Button>
        </CardBody>
      </Card>
     
    </CardDeck>
    </div>
    </div>
  );
};

export default AboutUs;