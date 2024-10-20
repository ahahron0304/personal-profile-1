import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HomePage = () => {
  const handleClick = () => {
    window.location.href = "https://www.facebook.com/vhenedick00";
  };
  return (
    <div className="container mt-5">
      <Card>
        <Card.Header className="card-title" style={{ fontSize: "54px" }}>
          Welcome to My Profile
        </Card.Header>
        <Card.Body>
          <Card.Text className="card-text" style={{ fontSize: "32px" }}>
            Hello! My name is John Vhenedick Nolasco, and I’m currently a
            third-year college student at PNC, pursuing a Bachelor of Science in
            Computer Science. I have a passion for technology and
            problem-solving, and I enjoy exploring various areas of programming,
            including web development and software engineering. I love
            collaborating with others on projects and am eager to learn new
            skills that will help me grow in the tech field.
          </Card.Text>

          <Card.Footer>
            <Row>
              <Col>
                <p>
                  <strong>
                    Facebook:{" "}
                    <Button variant="primary" onClick={handleClick}>
                      Go to Facebook
                    </Button>
                  </strong>
                </p>
                <Col>
                  <p>
                    <strong>
                      Email:{" "}
                      <a href="mailto:nolascojl283@gmail.com">
                        nolascojl283@gmail.com
                      </a>
                    </strong>
                  </p>
                  <p>
                    <strong>Contact:</strong> 09851092314
                  </p>
                </Col>
              </Col>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;
