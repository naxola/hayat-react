import React, { Component } from "react";
import "./pannelgrid.css";

class PannelGrid extends Component {
  state = {};
  render() {
    const preload = {
      data: [
        {
          title: "Efectiva",
          content:
            "Únicamente utilizamos los mejores principios activos para tienen efecto sobre tu piel. ",
          img_src: "",
          alt_img: ""
        },
        {
          title: "Vegano",
          content:
            "Nuestros productos son aptos para veganos. No están formulados con ningún ingrediente de origen animal.",
          img_src: "",
          alt_img: ""
        },
        {
          title: "Love Animals",
          content:
            "¡Que no te engañen! <br /> En la UE, no se permite el testeo en animales de productos cosméticos. Sin emabrgo, esto no quita que queramos y cuidemos tanto como tú a los animales.",
          img_src: "",
          alt_img: ""
        },
        {
          title: "Medio ambiente",
          content:
            "Es nuestra piedra angular. <br /> Tenemos que cuidar la naturaleza y por eso no solo tratamos de minimizar el impacto ambiental en el packaging (caja 100% reciclable y bote de vidrio) sino que además, tratamos que la producción sea lo más sostenible posible.",
          img_src: "",
          alt_img: ""
        },
        {
          title: "Detoxificante",
          content:
            "La mayoría de la población vive en entornos urbanos contaminados por los gases producios por vehículos, industrias... Todos estas moléculas llegan a nuestra piel, el órgano mas grande que tenemos. Es por eso que añadimos tecnologías que desintoxican tu piel para que quede protegida desde dentro.",
          img_src: "",
          alt_img: ""
        },
        {
          title: "Sostenible",
          content:
            "No solo conseguimos que nuestro packaging de vidrio sea 100% reciclabe y reutilizable sino que hacemos que nuestros proveedores se involucren de manera activa para minimizar el impacto en nuestro medio ambiente.",
          img_src: "",
          alt_img: ""
        }
      ]
    };
    return (
      <div className="pannel-grid">
        <h1>Cosmética efectiva y saludable</h1>
        <div className="container-grid">
          {preload.data.map((item, i) => (
            <div className="item" key={i}>
              <div className="item-header">
                <img src={item.img_src} alt={item.alt_img} />
              </div>
              <div className="item-content">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PannelGrid;
