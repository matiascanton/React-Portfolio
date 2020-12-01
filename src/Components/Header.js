import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Mostrar Menu</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Ocultar Menu</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
            <li><a className="smoothscroll" href="#about">Sobre Mi</a></li>
	         <li><a className="smoothscroll" href="#resume">Curriculum</a></li>
            <li><a className="smoothscroll" href="#portfolio">Trabajos</a></li>
           {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
            <li><a className="smoothscroll" href="#contact">Contacto</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h2 className="responsive-headline"> Hola, estas buscando un </h2>
            <h1 className="responsive-headline"> <Typewriter
                     options={{
                        strings: [occupation, "Apasionado por la Programacion", "dfhgd"],
                        autoStart: true,
                        loop: true,
                        delay: 70
                     }}
                 /*onInit={(typewriter) => {
                     typewriter.typeString('Hello World!')
                        .callFunction(() => {
                        console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                        console.log('All strings were deleted');
                        })
                        .start();
                  }}*/
                  /></h1>
            {/*<h1 className="responsive-headline">{occupation}?</h1>*/}
            <h3>Hoy es tu día de suerte! Acabás de encontrar uno. Me presento, soy<span> {name} </span>, actualmente vivo en {city} {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
