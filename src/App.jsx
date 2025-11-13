import React from 'react'
import { Navbar, Nav, Container, Row, Col, Button, Card } from 'react-bootstrap'

function App() {
  return (
    <div>
      {/* Navigation */}
      <Navbar bg="light" expand="lg" className="py-3 shadow-sm sticky-top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">WareFlow</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <div className="d-flex">
              <Button variant="primary" onClick={() => alert('Login clicked')}>Login</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero / Banner */}
      <section id="home" className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h1 className="display-5 fw-bold mb-3">Smart Warehouse Inventory Management</h1>
              <p className="lead text-muted mb-4">
                Track stock in real-time, reduce errors, and streamline operations with an all‑in‑one platform built for modern warehouses.
              </p>
              <div className="d-flex gap-2">
                <Button variant="primary" size="lg" href="#pricing">Get Started</Button>
                <Button variant="outline-primary" size="lg" href="#features">See Features</Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <Row className="g-3">
                  <Col xs={6}>
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Body>
                        <Card.Title className="h6">Live Stock</Card.Title>
                        <Card.Text className="display-6 fw-bold">8,420</Card.Text>
                        <small className="text-success">+2.1% today</small>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={6}>
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Body>
                        <Card.Title className="h6">Orders</Card.Title>
                        <Card.Text className="display-6 fw-bold">312</Card.Text>
                        <small className="text-primary">On track</small>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12}>
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Body>
                        <Card.Title className="h6">Low Stock Alerts</Card.Title>
                        <Card.Text className="mb-0">12 SKUs need attention</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Features built for scale</h2>
            <p className="text-muted">Everything you need to run a high‑performance warehouse.</p>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>Real‑time Inventory</Card.Title>
                  <Card.Text>
                    Live tracking across locations with instant sync and auto reconciliation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>Barcode & QR Support</Card.Title>
                  <Card.Text>
                    Fast scanning for receiving, putaway, picking, and cycle counts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>Smart Alerts</Card.Title>
                  <Card.Text>
                    Low stock, slow movers, and reorder suggestions powered by trends.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">About WareFlow</h2>
              <p className="text-muted">
                We help warehouses of all sizes gain visibility and control over stock. Our mission is to cut waste, speed up fulfillment, and make inventory management effortless.
              </p>
              <p className="text-muted mb-0">
                Trusted by operations teams around the world for reliability, security, and ease of use.
              </p>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>Why teams choose us</Card.Title>
                  <ul className="mb-0">
                    <li>Fast onboarding and intuitive UI</li>
                    <li>Scales from small stockrooms to 100k+ SKUs</li>
                    <li>Role‑based access and detailed audit logs</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Simple, transparent pricing</h2>
            <p className="text-muted">Start free, upgrade when you grow.</p>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body>
                  <Card.Title className="h4">Starter</Card.Title>
                  <p className="display-6 fw-bold">$0</p>
                  <p className="text-muted">Up to 500 SKUs</p>
                  <ul className="list-unstyled">
                    <li>1 Location</li>
                    <li>Basic Reports</li>
                    <li>Email Support</li>
                  </ul>
                  <Button variant="outline-primary">Get Started</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center border-primary">
                <Card.Body>
                  <Card.Title className="h4">Growth</Card.Title>
                  <p className="display-6 fw-bold">$49</p>
                  <p className="text-muted">Up to 10k SKUs</p>
                  <ul className="list-unstyled">
                    <li>5 Locations</li>
                    <li>Advanced Analytics</li>
                    <li>Priority Support</li>
                  </ul>
                  <Button variant="primary">Start Trial</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body>
                  <Card.Title className="h4">Enterprise</Card.Title>
                  <p className="display-6 fw-bold">Custom</p>
                  <p className="text-muted">Unlimited SKUs</p>
                  <ul className="list-unstyled">
                    <li>Unlimited Locations</li>
                    <li>Dedicated CSM</li>
                    <li>SLA & SSO</li>
                  </ul>
                  <Button variant="outline-primary">Contact Sales</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-light border-top">
        <Container className="text-center text-muted">
          © {new Date().getFullYear()} WareFlow. All rights reserved.
        </Container>
      </footer>
    </div>
  )
}

export default App
