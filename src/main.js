const Main = () =>{
    return <main className="col-md-8">
        <div>
            <h1 className="d-flex justify-content-center">¡Descubre la revolución en limpieza con nuestra nueva publicación de productos de limpieza!</h1>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://unilimpio.com/static/a3929000b57b1d0cf3e20104bd5507a0/b7dec/productos-de-limpieza-para-tu-hogar.webp" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.cien.adexperu.org.pe/wp-content/uploads/2023/10/productos-limpieza-basicos-1.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://s3.ppllstatics.com/laverdad/www/multimedia/2023/03/15/productos-limpieza-toxicos-peligrosos-ocu-ksTE-U1909178767610w-1200x840@La%20Verdad.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
        <div className="py-4">
            <p></p>
            <div>
                <p>En nuestro establecimiento de comida rápida, encontrarás todo el mejor sabor que podrá ir directo a tu boca.</p>
                <p>¿Qué te ofrecemos?</p>
                <ul>
                    <li>
                        <p><strong>Muchos tipos de hamrbuguesas:</strong> Desde la hamburguesa simple, royale, cheese y hasta dobles.</p>
                    </li>
                    <li>
                        <p><strong>Calidad superior:</strong> Nuestras hamburguesas están hechas por una carne muy bien procesada y de la mejor calidad, Los panes más frescos para ser ofrecidos a los clientes.</p>
                    </li>
                    <li>
                        <p><strong>Sabor certificado:</strong> Muchos clientes nos han dejado una buena recomendación por nuestro buen sabor y calidad de hamburguesa.</p>
                    </li>
                </ul>
                <p>No pierdas más tiempo y únete a la legión de clientes satisfechos que confían en nuestra publicación de productos de limpieza. ¡Haz de la limpieza una tarea fácil y disfruta de un espacio impecable en todo momento!</p>
            </div>
        </div>
    </main>
}

export default Main;