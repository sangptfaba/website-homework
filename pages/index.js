import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Dropdown,
  Container,
  Row,
  Col,
} from "reactstrap";

class Home extends Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
    dropdownAdminOpen: false,
  };

  toggleIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  onMouseEnter = () => {
    this.setState({ dropdownOpen: true });
  };

  onMouseLeave = () => {
    this.setState({ dropdownOpen: false });
  };

  toggleAdmin = () => {
    this.setState((prevState) => ({
      dropdownAdminOpen: !prevState.dropdownAdminOpen,
    }));
  };

  onMouseEnterAdmin = () => {
    this.setState({ dropdownAdminOpen: true });
  };

  onMouseLeaveAdmin = () => {
    this.setState({ dropdownAdminOpen: false });
  };

  render() {
    return (
      <div>
        <Head>
          <title>CTI - web</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main style={{ margin: 0, padding: 0 }}>
          <Navbar color="light" light expand="lg">
            <NavbarToggler onClick={this.toggleIsOpen} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <NavbarBrand className="mr-auto" href="/">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    src="/assets/logo-placeholder-1.jpg"
                    style={{ height: 50 }}
                  />
                  <h6 style={{ marginLeft: 5 }}>
                    Care
                    <br />
                    Transition
                    <br />
                    Intervention
                  </h6>
                </div>
              </NavbarBrand>

              <Nav navbar>
                <Dropdown
                  className="d-inline-block"
                  onMouseOver={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                  nav
                  inNavbar
                >
                  <NavItem nav>
                    <NavLink href="#">Form & Publications</NavLink>
                  </NavItem>
                  <DropdownMenu right>
                    <DropdownItem>Form & Publications</DropdownItem>
                    <DropdownItem>Our Publications</DropdownItem>
                    <DropdownItem>CTI Form</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <NavItem>
                  <NavLink href="#">News & Announcements</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Training</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Contact Us</NavLink>
                </NavItem>
                <Dropdown
                  className="d-inline-block"
                  onMouseOver={this.onMouseEnterAdmin}
                  onMouseLeave={this.onMouseLeaveAdmin}
                  isOpen={this.state.dropdownAdminOpen}
                  toggle={this.toggleAdmin}
                  nav
                  inNavbar
                >
                  <NavItem nav>
                    <NavLink href="#">Admin</NavLink>
                  </NavItem>
                  <DropdownMenu right>
                    <DropdownItem>Admin</DropdownItem>
                    <DropdownItem>Manage User</DropdownItem>
                    <DropdownItem>Create User</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <div
                  style={{
                    borderLeft: "1px solid teal",
                    width: 1,
                  }}
                />
                <NavItem>
                  <NavLink href="#">Hi Joe</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Sign Out</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <div
            style={{
              backgroundImage: "url(/assets/placeholder-banner.png)",
              width: "100%",
              height: 350,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "10%", right: "5%" }}>
              <h4>
                Whole-Person,
                <br />
                Patient-Centered Care
              </h4>
              <Button>Learn More</Button>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <Container fluid style={{ position: "absolute", top: -80 }}>
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col md="12" lg="8">
                  <Row>
                    <Col
                      sm="4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        style={{
                          width: 300,
                          height: 130,
                          backgroundColor: "#9c9cd6",
                          border: "none",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          style={{
                            height: 50,
                          }}
                          src="/assets/virus-svgrepo-com.svg"
                        />
                        <p>Covid-19 Support</p>
                      </Button>
                    </Col>
                    <Col
                      sm="4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        style={{
                          width: 300,
                          height: 130,
                          backgroundColor: "skyblue",
                          border: "none",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          style={{
                            height: 50,
                          }}
                          src="/assets/calendar-svgrepo-com.svg"
                        />
                        <p>Our Next Training Session</p>
                      </Button>
                    </Col>
                    <Col
                      sm="4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        style={{
                          width: 300,
                          height: 130,
                          backgroundColor: "#0e4371",
                          border: "none",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          style={{
                            height: 50,
                          }}
                          src="/assets/newspaper-svgrepo-com.svg"
                        />
                        <p>Latest News</p>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

          <div
            className="Welcome"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Container fluid>
              <Row>
                <Col xs="12" md="3">
                  <h1>Welcome to CTI</h1>
                </Col>
                <Col xs="12" md="9">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <ul>
                    <li>
                      <strong>List item one: </strong> Sed ut perspiciatis unde
                      omnis iste natus error sit voluptatem
                    </li>
                    <li>
                      <strong>List item one: </strong> Sed ut perspiciatis unde
                      omnis iste natus error sit voluptatem
                    </li>
                    <li style={{}}>
                      <strong>List item one: </strong> Sed ut perspiciatis unde
                      omnis iste natus error sit voluptatem
                    </li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <Button>Let's talk</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </main>

        <footer
          style={{
            marginTop: 50,
            display: "flex",
            justifyContent: "space-between",
            height: 100,
            backgroundColor: "#9c9cd6",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/logo-placeholder-1.jpg"
            style={{
              height: "80%",
            }}
          />
          <div
            style={{
              height: "80%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              textAlign: "right",
              margin: "0 10px",
            }}
          >
            <div>Footer</div>
            <div>Copyright 2020, all right reserved</div>
          </div>
        </footer>

        <style jsx>{`
          .navbar-light .navbar-nav .nav-link {
            color: #7b7bd8;
          }
          .open .dropdown {
            background-color: black;
          }
          li {
            font-size: omgHuge;
          }
          li span {
            font-size: mehNormal;
          }
          footer {
            color: white;
          }

          @media (max-width: 575px) {
            .Welcome {
              margin-top: 320px;
            }
          }
          @media (min-width: 576px) {
            .Welcome {
              margin-top: 80px;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            color: #7b7bd8;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
