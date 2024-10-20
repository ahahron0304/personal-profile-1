import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SkillsPage = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1>My Skills</h1>

          <Row>
            <Col sm={4}>
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://beadgrup.com/news/wp-content/uploads/2021/02/co.jpg"
                />
                <Card.Body>
                  <Card.Title>JavaScript</Card.Title>
                  <Card.Text>
                    JavaScript plays a critical role in creating responsive,
                    user-friendly applications. Mastery of JavaScript opens the
                    door to frameworks like React, Angular, and Node.js.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4}>
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://miro.medium.com/v2/resize:fit:1400/0*OLBBmwZWiKUNk685.png"
                />
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    React is a JavaScript library developed by Facebook for
                    building user interfaces.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4}>
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/d5/b9/3b/d5b93bad3c10cc5b92b47e4678598548.jpg"
                />
                <Card.Body>
                  <Card.Title>CSS</Card.Title>
                  <Card.Text>
                    CSS (Cascading Style Sheets) is a styling language that
                    describes how HTML elements are displayed on the screen.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col sm={4}>
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgfZ2sG6xWL_Ag0kASTIytHshA2F419syVg&s"
                />
                <Card.Body>
                  <Card.Title>Node.js</Card.Title>
                  <Card.Text>
                    Node.js is a runtime environment that allows developers to
                    execute JavaScript code server-side, making it possible to
                    build scalable, high-performance applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4}>
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMkNhiF3BDxSjVaenKOkg9ShQL1gtFIxxwA&s"
                />
                <Card.Body>
                  <Card.Title>Laravel</Card.Title>
                  <Card.Text>
                    Laravel is a robust PHP framework that simplifies the
                    development of web applications with elegant syntax
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4}>
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://miro.medium.com/v2/resize:fit:850/0*3vxwGtPKV44S6EW2.jpg"
                />
                <Card.Body>
                  <Card.Title>MySQL</Card.Title>
                  <Card.Text>
                    MySQL is a widely-used, open-source relational database
                    management system (RDBMS). It allows for efficient storage,
                    retrieval, and management of data across web applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col sm={4}>
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://external-preview.redd.it/7ygAQslsqUxUYwdcTVqQMP_-1G-2YS-po1A1VVVYyUw.jpg?auto=webp&s=a24d756a67ab2fe0114ce6721fa669a6889674bf"
                />
                <Card.Body>
                  <Card.Title>PHP</Card.Title>
                  <Card.Text>
                    PHP is a server-side scripting language designed for web
                    development. It powers many of the world’s websites and
                    applications, thanks to its flexibility and ease of
                    integration with databases like MySQL.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
