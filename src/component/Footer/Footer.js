import React from 'react'
import './Footer.css'


export default function Footer() {
    return (
        <div>
          <footer className="fondo1 page-footer">
            <div className="footer--backgroundColor">
              <div className="container"></div>
                <div className="row py-4 d-flex align-items-center"></div>
            </div>

            <div className="container text-center text-md-left mt-5">

              <div className="row mt-3">

                <div className=" col-4 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase font-weight-bold text-white">Enlaces Útiles </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px;"}}/>
                  <p>
                    <a className="text-white" href="#!">Preguntas frecuentes</a>
                  </p>
                  <p>
                    <a className="text-white" href="#!">Politica de privacidad</a>
                  </p>
                  <p>
                    <a className="text-white" href="#!">Licencia de Usuario</a>
                  </p>

                </div>
                
                <div className=" col-4 col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 className="text-uppercase font-weight-bold text-white">Contacto</h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px;"}}/>
                  <p className="text-white">
                    <i className="fas fa-home mr-3 "/> Formosa, Formosa, Av.Italia 286 </p>
                  <p className="text-white"> 
                    <i className="fas fa-envelope mr-3 "/> agenciaquiniela@gmail.com </p>
                  <p className="text-white">
                    <i className="fas fa-phone mr-3 "/>  WhatsApp: 54+3704772482</p>

                </div>

              </div>

            </div>
            <p className="footer-content">®Todos los derechos reservados.  </p>
            <a href="http://127.0.0.1:5501//index.html" className="footer-content">© Agencia de Quiniela Nº 88</a>
          </footer>
        </div>
    )
}
