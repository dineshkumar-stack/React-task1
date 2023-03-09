import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Detail
        access="✔ "
        img="https://thumbs.dreamstime.com/b/cute-boy-face-cartoon-vector-illustration-graphic-design-cute-boy-face-cartoon-110654260.jpg"
        name="Dinesh"
        batch="B34"
      />
      <Detail
        access="❌ "
        img="https://thumbs.dreamstime.com/b/cute-boy-face-cartoon-cute-boy-face-cartoon-vector-illustration-graphic-design-110654225.jpg"
        name="Kumar"
        batch="B35"
      />
      <Detail
        access="❌ "
        img="https://thumbs.dreamstime.com/b/cute-boy-face-cartoon-cute-boy-face-cartoon-vector-illustration-graphic-design-110654225.jpg"
        name="Vignesh"
        batch="B64"
      />
      <Detail
        access="✔ "
        img="https://thumbs.dreamstime.com/b/beautiful-girl-face-cartoon-beautiful-girl-face-cartoon-vector-illustration-graphic-design-110656458.jpg"
        name="Ram"
        batch="B24"
      />
    </div>
  );
}

function Detail(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <p>Team member</p>
      <h2>
        <span>{props.access}</span>
        {props.name}
      </h2>
      <h4>{props.batch}</h4>
    </div>
  );
}

