import { collection, getFirestore, getDocs } from "firebase/firestore/lite";
import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();
const rooms = [
  {
    id: 1,
    title: 'Habitación Comfort',
    description: 'La habitación Comfort te brindará una estancia acogedora y relajante. Con una decoración cuidadosamente diseñada y comodidades modernas, esta habitación es perfecta para aquellos que buscan un ambiente tranquilo. Disfruta de una cómoda cama king-size, un amplio baño privado con bañera de hidromasaje y un área de trabajo para tus necesidades laborales. Además, la habitación cuenta con acceso gratuito a Internet de alta velocidad y televisión por cable para entretenerte durante tu estancia.',
    image: require('../assets/images/comfort.jpeg'),
    maxPeople:'4',
    price: 365,
  },
  {
    id: 2,
    title: 'Habitación Deluxe',
    description: 'La habitación Deluxe es el epítome del lujo y la elegancia. Con una decoración sofisticada y lujosa, te sentirás como en un auténtico oasis de descanso. Esta espaciosa habitación cuenta con una cama extragrande, un elegante baño privado con ducha de efecto lluvia y artículos de aseo de alta calidad. Relájate en el área de estar privada mientras disfrutas de las impresionantes vistas desde la ventana panorámica. Además, la habitación está equipada con un minibar surtido, una cafetera de última generación y un televisor de pantalla plana con canales premium.',
    image: require('../assets/images/deluxe.jpeg'),
    maxPeople:'4',
    price: 470,
  },
  {
    id: 3,
    title: 'Habitación Elegance',
    description: 'La habitación Elegance personifica el refinamiento y el lujo en su máxima expresión. Desde el momento en que ingreses, te envolverá la opulencia y la belleza de cada detalle. La cama extragrande con sábanas de algodón egipcio te brindará el descanso más placentero. El baño privado cuenta con una bañera de hidromasaje para que te relajes completamente. Además, tendrás acceso a un mayordomo personalizado las 24 horas para atender a tus necesidades y deseos. La sala de estar privada ofrece un espacio de entretenimiento exclusivo y las mejores vistas desde el balcón privado. Disfruta de la última tecnología con un sistema de sonido envolvente, una pantalla de cine y un televisor de alta gama.',
    image: require('../assets/images/elegance.jpeg'),
    maxPeople:'6',
    price: 699,
  },
];

export const DataProvider = (props) => {
  const [products] = useState(rooms);
 
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    const alreadyInCart = cart.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!alreadyInCart) {
      const formattedProduct = { ...product, quantity: 1 };

      setCart([...cart, formattedProduct]);
    } else {
      const productInCart = cart.find(
        (cartProduct) => cartProduct.id === product.id
      );

      const formattedProduct = {
        ...productInCart,
        quantity: productInCart.quantity + 1,
      };

      const newCart = cart.filter(
        (cartProduct) => cartProduct.id !== product.id
      );

      setCart([...newCart, formattedProduct]);
    }
  };

  const removeFromCart = (productId) => {
    const filteredCart = cart.filter((product) => product.id !== productId);
    setCart(filteredCart);
  };

  const resetCart = () => {
    setCart([]);
  };

  const value = {
    products,
    cart,
    addToCart,
    removeFromCart,
    resetCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
