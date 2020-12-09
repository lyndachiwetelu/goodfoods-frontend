import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'
import logo from './assets/images/logo.png'
import { CartFill } from 'react-bootstrap-icons'
import Home from './routes/Home/Home'
import FoodList from './routes/FoodList/FoodList'

const App = () => {
  return (
    <Router>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home" className="Brand">
          <img src={logo} width="50" height="50" className="Brand__Img" alt="brand logo"/>
            <h1>Good Foods</h1>
          </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="Collapsible">
          <Nav className="ml-auto Menu">
            <Nav.Link> <Link to="/" className="Menu__Item">Home</Link></Nav.Link>
            <Nav.Link> <Link to="/foods/list" className="Menu__Item">Order Now</Link></Nav.Link>
            <Nav.Link> <Link to="/" className="Menu__Item">About us</Link></Nav.Link>
            <Nav.Link> <Link to="/" className="Menu__Item">Contact us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartFill color="#f33d15" size={24}/>
     </Navbar>
    <Switch>
      <Route path="/foods/list" component={FoodList} />
      <Route path="/" component={Home} />
    </Switch>
    </Router>
    )
}

export default App;
