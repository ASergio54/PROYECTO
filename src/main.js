import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Productos from './data/productos.json'
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return (
        <Container className="col-8">
            <Row className="justify-content-center">
                <Col>
                    <h1 className="text-center">¡Descubre el mejor sabor directo a tu paladar en el mejor local!</h1>
                    
                    <Carousel>
                        {
                                Productos.map(it => {
                                return (<Carousel.Item onClick={(e) => {
                                    e.preventDefault(); handleClick(it.slug)
                                }}>
                                    <img className="d-block w-100" src={it.picture}></img>
                                    <Carousel.Caption>
                                        <h3>{it.name}</h3>
                                        <p>{it.description}</p>
                                    </Carousel.Caption>

                                </Carousel.Item>);
                            })
                        }
                    </Carousel>

                    <div className="py-4">
                        <p>En un mundo donde las hamburguesas están tareas, te ofrecemos el mejor sabor para toda la familia.</p>
                        <p>¿Qué te ofrecemos?</p>
                        <ul>
                            <li>
                                <strong>Variedad de sabores:</strong> Desde los sabores tradicionales hasta colaboraciones con las mejores series.
                            </li>
                            <li>
                                <strong>Calidad superior:</strong> La hamburguesa de mayor calidad con los productos de mayor calidad.
                            </li>
                            
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;