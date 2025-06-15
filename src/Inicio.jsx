import { BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import { Nav, NavItem, NavLink, Row, Col, Modal } from 'reactstrap';
import './Inicio.css';
import Peliculas from './Peliculas.jsx';
import Cartilla from './Cartilla.jsx';

function Principal() {
  return (
    <div className="Principal">
        <Cartilla />
    </div>
  );
}

function Inicio() {
  return (
    <div className="contenedor">
      <header className="titulo">
        <h1>Cinemateca Boliviana</h1>
      </header>
      <nav className="menu">
        <Nav pills>
          <NavItem>
            <NavLink tag={Link} to="/" end>
              <h5>Principal</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/pag1">
                <h5>Películas</h5>
            </NavLink>
          </NavItem>
        </Nav>
      </nav>
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/pag1" element={<Peliculas />} />
        </Routes>
      </main>
      <footer className="footer1">
        <h3>Jhasmin Nicol Mamani Quispe</h3>
      </footer>
      <footer className="publicidad">
        <h5>INF-122</h5>
      </footer>
    </div>
  );
}

export default Inicio;
