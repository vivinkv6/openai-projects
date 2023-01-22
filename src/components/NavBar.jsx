import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Link to="/" className="text-decoration-none text-light">
            <h2>OpenAI</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavDropdown title="AI Generators" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">
                <Link to="/" className="text-dark text-decoration-none">
                  Image Generator
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/jsbot">
                <Link to="/jsbot" className="text-dark text-decoration-none">
                  JavaScript Bot
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/sql">
                <Link to="/sql" className="text-dark text-decoration-none">
                  SQL Translator
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/complexity">
                <Link
                  to="/complexity"
                  className="text-dark text-decoration-none"
                >
                  Measure Complexity
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/aichat">
                <Link
                  to="/aichat"
                  className="text-dark text-decoration-none"
                >
                  AI Tutor
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/ask">
              <Link
                  to="/ask"
                  className="text-dark text-decoration-none"
                >
                  Ask Anything
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
