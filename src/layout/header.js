import { useEffect } from 'react';
import { Link } from "react-router-dom";
import feather from 'feather-icons';
import '../style.css'; // Asegúrate de que el estilo esté importado desde la ubicación correcta

const Header = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div>
      <div className="px-3 py-2 custom-header text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
      
            
              <img src="https://i.imgur.com/hhALaVk.png" width="56" height="56" alt="Home"/>
            
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link href="#" className="nav-link nav-link-custom">
                  <i data-feather="home" className="d-block mx-auto mb-1 feather-icon-custom" width="24" height="24"></i>
                  Inicio
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link nav-link-custom">
                  <i data-feather="bar-chart-2" className="d-block mx-auto mb-1 feather-icon-custom" width="24" height="24"></i>
                  Comentarios
                </a>
              </li>
              <li>
                <a href="#" className="nav-link nav-link-custom">
                  <i data-feather="shopping-bag" className="d-block mx-auto mb-1 feather-icon-custom" width="24" height="24"></i>
                  Carta
                </a>
              </li>
              <li>
                <a href="#" className="nav-link nav-link-custom">
                  <i data-feather="box" className="d-block mx-auto mb-1 feather-icon-custom" width="24" height="24"></i>
                  Locales
                </a>
              </li>
              <li>
                <a href="#" className="nav-link nav-link-custom">
                  <i data-feather="users" className="d-block mx-auto mb-1 feather-icon-custom" width="24" height="24"></i>
                  Comunidad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
