const Main = () =>{
    return <main className="col-md-8">
        <div>
            <h1 className="d-flex justify-content-center">¡Descubre el mejor sabor que probará tu paladar en el mejor local de hamburguesas!</h1>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://pronacatqma.com/images/com_yoorecipe/banner_superior/18096_1.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/02/26/15511968658125.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://elcomercio.pe/resizer/ri1EQ0I5WEp8A-iFtVXIzQAR9dg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/476VPZOYBNDHLIXAWE6XYC7ORY.png" className="d-block w-100" alt="..."></img>
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
                        <p><strong>Sabor certificado:</strong> Muchos clientes nos han dejado una buena recomendación por nuestro buen sabor y calidad de hamburguesa.</p>
                    </li>
                </ul>
            </div>
        </div>
    </main>
}

export default Main;