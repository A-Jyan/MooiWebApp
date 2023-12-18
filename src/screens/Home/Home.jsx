import React from "react";
import "./Home.css";


const gallery = [
  require('../../assets/images/gallery/deluxe.jpeg'),
  require('../../assets/images/gallery/desayuno.jpeg'),
  require('../../assets/images/gallery/dinner.jpeg'),
  require('../../assets/images/gallery/gym.jpeg'),
  require('../../assets/images/gallery/living.jpg'),
  require('../../assets/images/gallery/ocean.jpg'),
  require('../../assets/images/gallery/pool.jpeg'),
  require('../../assets/images/gallery/premium-room.jpeg'),
  require('../../assets/images/gallery/spa.jpeg'),
]


const Home = () => {

  return (
    <div className="home__container">
      <img
        src={require('../../assets/images/lobby.jpg')}
        alt="banner"
        title="lobby-banner"
        className="home-banner"
      />
      <div className="home__description-container">
        <h2 style={{ margin: '0 0 2rem 0', textAlign: 'center' }}>MOOI</h2>
        <p style={{ margin: '0 0 4rem 0' }}>
          Bienvenido al Hotel Mooi, un magnífico resort de cinco estrellas situado en una exuberante isla caribeña. Como su nombre lo indica, "Mooi", que significa "hermoso" en holandés, encarna la esencia de este paraíso, donde la belleza, la elegancia y la comodidad se combinan para ofrecer una experiencia inolvidable.
          <br />
          <br />
          Sumérgete en la serenidad de playas de arena blanca, bordeadas por majestuosas palmeras que bailan con la brisa tropical. El mar turquesa que abraza el resort es un espectáculo impresionante y te invita a sumergirte en sus aguas cristalinas.
          El diseño arquitectónico del Hotel Mooi te sorprenderá, ya que fusiona con maestría elementos caribeños y toques modernos, logrando una armonía perfecta con la naturaleza que lo rodea. Cada rincón del resort ha sido cuidadosamente diseñado para capturar la esencia caribeña y brindar un ambiente acogedor y relajante.
          Nuestro compromiso es ofrecerte una estancia llena de exclusividad y confort. Disfruta de nuestras lujosas y amplias habitaciones, equipadas con todas las comodidades que puedas desear. Nuestro personal altamente capacitado estará a tu disposición para atender tus necesidades y hacer que tu estadía sea inolvidable.
          <br />
          <br />
          Para los amantes de la gastronomía, nuestro resort cuenta con restaurantes de clase mundial que deleitarán tu paladar con sabores locales e internacionales. Acompaña tus comidas con exquisitas bebidas tropicales y contempla espectaculares atardeceres desde nuestras terrazas con vistas panorámicas.
          Las opciones de entretenimiento son infinitas en el Hotel Mooi. Relájate en nuestras piscinas de aguas cristalinas, disfruta de emocionantes deportes acuáticos o sumérgete en el ambiente vibrante de nuestras fiestas temáticas.
          Si buscas una experiencia rejuvenecedora, nuestro spa te brindará tratamientos exclusivos que te renovarán cuerpo y mente, rodeado de un entorno natural que inspira paz y serenidad.
          <br />
          <br />
          Ven y descubre el paraíso en el Hotel Mooi, donde cada momento será un recuerdo imborrable en tu corazón. ¡Te esperamos para brindarte una experiencia única en este rincón de ensueño en el Caribe!</p>
        <h2 style={{ alignSelf: 'center', textAlign: 'center', margin: '0 0 4rem 0' }}>Galería de fotos</h2>

        <div className="gallery">
          {gallery.map((photo, index) => (
            <div key={index} className="photo">
              <img src={`${photo}`} alt={'imagen'} />
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export { Home };
