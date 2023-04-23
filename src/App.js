import './App.css';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



export default function App() {
  return (
    <div className="App">
      <Detail1
        type="FREE"
        price="$0"
        user="✔ Single User"
        storage="✔ 5GB Storage"
        project="✔ Unlimited Public Projects"
        community="✔ Community Access"
        limit="❌ Unlimited Private Projects"
        support="❌ Dedicated Phone Support"
        domain="❌ Free Subdomain"
        status="❌ Monthly Status Reports"
        yes="✔ "
        no="❌ "
      />
      <Detail2
        type="PLUS"
        price="$9"
        user="✔ 5 Users"
        storage="✔ 50GB Storage"
        project="✔ Unlimited Public Projects"
        community="✔ Community Access"
        limit="✔ Unlimited Private Projects"
        support="✔ Dedicated Phone Support"
        domain="✔ Free Subdomain"
        status="❌ Monthly Status Reports"
      />
      <Detail3
        type="PRO"
        price="$49"
        user="✔ Unlimited Users"
        storage="✔ 150GB Storage"
        project="✔ Unlimited Public Projects"
        community="✔ Community Access"
        limit="✔ Unlimited Private Projects"
        support="✔ Dedicated Phone Support"
        domain="✔ Unlimited Free Subdomains"
        status="✔ Monthly Status Reports"
      />
    </div>
  );

}

function Detail1(props) {
  return (
    <Card class="card">

      <Card.Header> <span class="he">{props.type}</span><br></br>{props.price}<span>/month</span></Card.Header>
      <ListGroup variant="flush">
        <ListGroup>{props.user}</ListGroup>
        <ListGroup>{props.storage}</ListGroup>
        <ListGroup>{props.project}</ListGroup>
        <ListGroup>{props.community}</ListGroup>
        <ListGroup variant="not">{props.limit}</ListGroup>
        <ListGroup variant="not">{props.support}</ListGroup>
        <ListGroup variant="not">{props.domain}</ListGroup>
        <ListGroup variant="not">{props.status}</ListGroup>
        <Button variant="light">Buy</Button>{' '}

      </ListGroup>

    </Card>

  );
}


function Detail2(props) {
  return (
    <Card class="card">

      <Card.Header> <span class="he">{props.type}</span><br></br>{props.price}<span>/month</span></Card.Header>
      <ListGroup variant="flush">
        <ListGroup>{props.user}</ListGroup>
        <ListGroup>{props.storage}</ListGroup>
        <ListGroup>{props.project}</ListGroup>
        <ListGroup>{props.community}</ListGroup>
        <ListGroup>{props.limit}</ListGroup>
        <ListGroup>{props.support}</ListGroup>
        <ListGroup>{props.domain}</ListGroup>
        <ListGroup variant="not">{props.status}</ListGroup>
        <Button variant="light">Buy</Button>{' '}

      </ListGroup>

    </Card>

  );
}



function Detail3(props) {
  return (
    <Card class="card">

      <Card.Header> <span class="he">{props.type}</span><br></br>{props.price}<span>/month</span></Card.Header>
      <ListGroup variant="flush">
        <ListGroup>{props.user}</ListGroup>
        <ListGroup>{props.storage}</ListGroup>
        <ListGroup>{props.project}</ListGroup>
        <ListGroup>{props.community}</ListGroup>
        <ListGroup>{props.limit}</ListGroup>
        <ListGroup>{props.support}</ListGroup>
        <ListGroup>{props.domain}</ListGroup>
        <ListGroup>{props.status}</ListGroup>
        <Button variant="light">Buy</Button>{' '}

      </ListGroup>

    </Card>

  );
}