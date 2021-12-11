import React from "react";
import Foto from "../assets/img/Foto.jpg";
import BrisasOne from "../assets/img/brisas.jpg";
import BrisasTwo from "../assets/img/brisas(2).jpg";
import Familia from "../assets/img/familia.jpg";
import Director from "../assets/img/director.jpg";
import Keon from "../assets/img/keon.jpg";

const Home = () => {
  return (
    <div className="container-home">
      <h1>Autobiografía </h1>
      <hr className="hr"></hr>
      <p className="center">
        Hola, ¿cómo estás?, Me llamo Fred Santiago Ovallos tengo 24 años, soy el
        mayor de dos hijos, actualmente vivo con mi hermano y mi madre.
      </p>
      <img className="foto" src={Foto}></img>
      <p>ven!!! te contare un poco de mi.</p>
      <hr className="hr"></hr>
      <p>
        Te contare algo de mis estudios, En el 2013 culmine mis estudios como
        bachiller técnico de sistemas de manejo ambiental y actualmente estoy en
        proceso de grado de la carrera ingeniería de sistemas de la Universidad
        Francisco de Paula Santander Ocaña, te quiero comentar que desde niño
        siempre me ha interesado el Artes y la Cultura por ende pertenecí desde
        mis 15 años a la EFAC (la escuela de formación de Arte y Cultura) del
        municipio de El Carmen, donde soy oriundo y pase mis mejores días de mi
        infancia; en estos momentos pertenezco a la Corporación Artística y
        Cultural “Brisas de Torcoroma” en la cual soy bailarín y espero per
        tener por muchos años más.
      </p>
      <div className="space-evenly">
        <img className="brisasOne" src={BrisasOne}></img>
        <img className="brisasTwo" src={BrisasTwo}></img>
      </div>
      <p>
        Mi comienzo en la U, complicado de verdad, fue uno de los momentos que
        más me ha marcado, ya que la carrera no era de mi agrado total, pero al
        pasar los semestres comencé a indagar y mirar lo bonito que es el mundo
        de la programación el cual hoy en día es uno de mis fuertes, comencé a
        manejar de gran manera los lenguajes Html5, CSS3,JavaScript y algunas
        librerías; Afuera de eso tome mi autoaprendizaje y comencé a manejar
        herramienta de diseño como los adobe InDesign, adobe Photoshop, adobe
        illustrator y figma, las que hicieron que me enamorara más de esta
        carrera. Realicé mis pasantías con la empresa WPOSS en donde pude
        impulsar más mi vida profesional y en la que actualmente trabajo en el
        área de UX/UI como diseñador y desarrollador web.
      </p>
      <hr className="hr"></hr>
      <p>
        La persona más importante en mi vida es mi madre, siendo una mujer
        luchadora la cual nos ha sacado adelante, siendo una madre soltera me ha
        convertido en el hombre que soy, mi madre es mi gran inspiración y mi
        motor de vida y por eso quiero darle todo lo que se merece, poderle
        comprar la casa de sus sueños que es lo q más anhela, otra de las
        personas que más ha marcado mi vida es el director de la corporación
        Artística y Cultural “Brisas de Torcoroma”, quien ha estado conmigo
        cuando más lo he necesitado como un papá y lo más importante es que me
        ha impulsado a no dejar mi amor por la Danza, donde llevo 10 años de
        vida artística, una de las cosas que más anhelo hacer es ayudar a
        nuestros amiguitos de cuatro patas y poder darles un hogar donde puedan
        ser libres y más que todo que nos les falte la comida y el amor como a
        mi perro keon.
      </p>
      <div className="space-evenly">
        <img className="familia" src={Familia}></img>
        <img className="familia" src={Director}></img>
        <img className="keon" src={Keon}></img>
      </div>
    </div>
  );
};

export default Home;
