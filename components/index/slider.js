import { useEffect, useState } from "react";
import Link from "next/link";

import Productos from "../../pages/productos/index";

let contenedor = null;

export default function SliderH(props) {
  const scrollHorizontal = (e) => {
    let widthActual = innerWidth;
    let html = e.target.id;
    console.log(html);
    if (html.includes("catalogo")) {
      contenedor.scroll(0, 0);
    } else if (html.includes("centro")) {
      contenedor.scroll(widthActual, 0);
    } else if (html.includes("aporte")) {
      contenedor.scroll(widthActual * 2, 0);
    }
  };

  useEffect(() => {
    let widthActual = innerWidth;
    contenedor = document.querySelector(".div");
    setTimeout(() => {
      contenedor.scroll(widthActual, 0);
    }, 200);
  }, []);

  return (
    <div
      onTouchEnd={scrollHorizontal}
      className="div"
      style={{ height: props.height, overflowX: "hidden" }}
    >
      <div className="slider-1">
        <div className="link">
          <p id="centro" onClick={scrollHorizontal} className="link__flecha">
            <span id="centro">&#62;</span>
          </p>
        </div>
        <div className="slider-1__contenedor">
          <Productos />
        </div>
      </div>
      <div className="slider-2">
        <div className="link">
          <p id="catalogo" onClick={scrollHorizontal} className="link__flecha">
            <span id="catalogo">&#60;</span> Catalogo
          </p>
          <p id="aporte" onClick={scrollHorizontal} className="link__flecha">
            Aporte <span id="aporte">&#62;</span>
          </p>
        </div>
        <div className="slider-2__contenedor">
          <div className="slider-2__div">
            <h2>Trabajamos</h2>
            <p>para un bien mayor en nuestras comunidades</p>
          </div>
          <div className="slider-2__div">
            <h2>Nos hacemos cargo</h2>
            <p>de llevar el sustento a todos los venezolanos</p>
          </div>
          <div className="slider-2__div">
            <h2>Somos receptivos</h2>
            <p>a las necesidades básicas de los venezolanos</p>
          </div>
        </div>
      </div>
      <div
        style={{
          height: props.height - 100 + "px",
          width: "100vw",
          background: "#888",
        }}
      >
        <div className="link">
          <p id="centro" onClick={scrollHorizontal} className="link__flecha">
            <span id="centro">&#60;</span>
          </p>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: grid;
          grid-auto-flow: column;
          overflow-x: scroll;
          overflow-y: hidden;
          scroll-behavior: smooth;
          width: 100%;
        }

        .link {
          user-select: none;
          padding: 0 5%;
        }

        .slider-1 .link {
          display: flex;
          justify-content: flex-end;
        }

        .slider-1 {
          display: grid;
          grid-template-rows: 3rem auto;
          height: ${props.height + "px"};
          width: 100vw;
          }

        .slider-1__contenedor {
          overflow-y: auto;
        }

        .p1 {grid-area: p1;}
        .p2 {
          align-items: center;
          background: #444;
          color: #fff;
          display: flex;
          flex-direction: column;
          grid-area: p2;
          justify-content: center;
          padding: 0.7rem;
          text-align: center;
        }
        .p2 > h3 {margin-block-start: 01rem;margin-block-end: 1rem;}
        .p2 a {border: 2px solid #fff4;padding: 0.5rem;transition: .3s;}
        .p2 a:hover {background: #fff4;border-color: transparent:}
        .p3 {grid-area: p3;}
        .p4 {grid-area: p4;}
        .p5 {grid-area: p5;}

        .slider-2 {
          display: grid;
          grid-template-rows: 3rem auto;
          height: ${props.height + "px"};
          text-align: center;
          padding: 0 5%;
          width: 100vw;
        }

        .slider-2 .link {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }

        .slider-2__contenedor {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .slider-2__div {
          margin: 1rem 0;
        }

        .link__flecha {
          align-items: center;
          cursor: pointer;
          display: flex;
          font-size: 1.2rem;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .link__flecha > span {
          font-size: 3rem;
          margin: .3rem;
        }
      `}</style>
    </div>
  );
}
