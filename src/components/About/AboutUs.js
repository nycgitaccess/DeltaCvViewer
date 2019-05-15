import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import "./AboutUs.css"

const AboutUs = (props) => {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
      <h1>Class delta team</h1>
      </div>
    <CardDeck>
      <Card>
        <CardImg top width="80%"src="https://scontent.fath6-1.fna.fbcdn.net/v/t1.0-9/13466022_265949933765485_2302318879502977296_n.jpg?_nc_cat=104&_nc_ht=scontent.fath6-1.fna&oh=c99dac87503db326fd8c65c761055e0b&oe=5D3C3803" alt="Card image cap" />
        <CardBody>
          <CardTitle> name:{props.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="80%" src="https://media.licdn.com/dms/image/C4E03AQHb1V8S7vKLCA/profile-displayphoto-shrink_800_800/0?e=1560988800&v=beta&t=-3KELNe4Wc75HGZ6CntJh-BejPO_tiGI9lqe_v0-xao" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="80%"  src="https://media.licdn.com/dms/image/C5603AQGSVPNcYef6xA/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=OqMskSe5apKdK772tnjPltw3Wo3plkoUyI5kt27osFo" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="80%"  src="https://media.licdn.com/dms/image/C5603AQGSVPNcYef6xA/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=OqMskSe5apKdK772tnjPltw3Wo3plkoUyI5kt27osFo" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      
    </CardDeck>
    </div>
  );
};

export default AboutUs;