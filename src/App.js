import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function App() {
  const [catImg, setCatImg] = useState("");
  const [catFact, setCatFact] = useState({});

  useEffect(() => {
    requestCatInfo();
  }, []);

  const requestCatInfo = () => {
    fetch("https://cataas.com/cat?json=true")
      .then((res) => res.json())
      .then((json) => setCatImg(json))
      .catch((error) => console.warn(error));

    fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat")
      .then((res) => res.json())
      .then((json) => setCatFact(json))
      .catch((error) => console.warn(error));
  };

  return (
    <div className="d-flex justify-content-center">
      <Card className="m-3" style={{ width: "24rem" }}>
        <Card.Img variant="top" src={`https://cataas.com/${catImg.url}`} />
        <Card.Body>
          <Card.Text>{catFact.text}</Card.Text>
          <Button variant="primary" onClick={requestCatInfo}>
            🐈 Get a cat fact
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
