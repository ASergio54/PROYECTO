const Aside = () =>{
    return <aside className="col-8 text-black">
        <h1 className="d-flex justify-content-center">¡ESTAMOS PARA TI!</h1>
        <form>
            <div className="form-group row">
                <div className="col-6">
                    <label for="">Nombre</label>
                    <input type="text" className="form-control" placeholder="Sergio"></input>
                </div>
                <div className="col-6">
                    <label for="">Apellido</label>
                    <input type="text" className="form-control" placeholder="Requejo Reategui"></input>
                </div>
            </div>
            <br></br>
            <div className="form-group">
                    <label for="">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="sergiorequejo54@gmail.com" required></input>
                </div>
                <br></br>
                <div className="form-group">
                    <label for="">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="************"></input>
                </div>
                <br></br>
                <button type="submit" className="btn btn-e6110a">Enviar</button>

        </form>
    </aside>
}

export default Aside;