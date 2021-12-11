import React from "react";
import Api from "../assets/img/api.jpg";

const Questions = () => {
  return (
    <div className="container-questions">
      <div className="center">
        <div className="verticalLine container-ques">
          <h4>¿Para qué son los software de gestión documental?</h4>
          <p>
            Son aquellos que nos permiten tener un orden en las distintas
            versiones, para asi saber cuando y por quien se realiza las
            modificaciones.
          </p>
        </div>
        <div className="verticalLine container-ques">
          <h4>¿Qué percibe del proyecto MiContrato?</h4>
          <p>
            el proyecto meda perspectiva del manejo de documentos importantes a
            traves de una plataforma de diferentes empresas y personas que
            quieren tener su documentos de manera mas segura.
          </p>
        </div>
        <div className="container-ques">
          <h4>
            ¿Qué es una prueba unitaria, que tipos de pruebas se realizan al
            frontend?
          </h4>
          <p>
            Son conocidas como las pruebas de caja blanca y el proposito de esta
            es realizar lo a funciones individuales.
          </p>
          <p>
            las pruebas que se realizan al Fronten son: Test unitarios, Test de
            integración, Test de aceptación, Test de accesibilidad, Test de CSS
            y Test de regresión
          </p>
        </div>
      </div>
      <hr></hr>
      <p>
        Uno de los consumos mas seguros de servicios rest es el basado por
        token, el cual se envia datos como usuario, correo, numero de
        identificacion y/o contraseña, para si recibir una respuesta en la q
        viene un token que nos permite continuar si el usuario existe en la
        aplicativo web, si es asi continuara navegando en este, en caso
        contrario lo mantendra en el login, esta validacion se puede usar
        tambien en diferentes modulos.el token es guardo en la localstore para
        donde se encuentra los datos de inicialización.
      </p>
      <img src={Api}></img>
    </div>
  );
};

export default Questions;
