import { useEffect, useState } from "react";
import Link from "next/link";

import Productos from "../../pages/productos/index";

let contenedor = null;

export default function SliderH(props) {
  const scrollHorizontal = (e) => {
    let widthActual = innerWidth;
    let html = e.target.id;
    if (html.includes("catalogo")) {
      contenedor.scroll(0, 0);
      window.scroll(0, props.height);
      setTimeout(() => {}, 300);
    } else if (html.includes("centro")) {
      contenedor.scroll(widthActual, 0);
    } else if (html.includes("aporte")) {
      contenedor.scroll(widthActual * 2, 0);
      window.scroll(0, props.height);
      setTimeout(() => {}, 300);
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
      <div className="slider-3">
        <div className="link">
          <p id="centro" onClick={scrollHorizontal} className="link__flecha">
            <span className="link__izq" id="centro">
              &#60;
            </span>
          </p>
        </div>
      </div>
      <style jsx>{`
        .link {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 0 5%;
          user-select: none;
        }

        .link__flecha {
          align-items: center;
          cursor: pointer;
          display: flex;
          font-size: 1.4rem;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .link__flecha > span {
          font-size: 3.3rem;
          margin: 0.3rem;
        }

        .div {
          display: grid;
          grid-auto-flow: column;
          overflow-x: scroll;
          overflow-y: hidden;
          scroll-behavior: smooth;
          width: 100%;
        }

        .slider-1 {
          display: grid;
          grid-template-rows: 3rem auto;
          height: ${props.height + "px"};
          width: 100vw;
        }

        .slider-1 .link {
          justify-content: flex-end;
        }

        .slider-1__contenedor {
          overflow-y: auto;
        }

        .slider-2 {
          display: grid;
          grid-template-rows: 3rem auto;
          height: ${props.height + "px"};
          text-align: center;
          padding: 0 5%;
          width: 100vw;
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

        .slider-3 {
          display: grid;
          grid-template-rows: 3rem auto;
          height: ${props.height + "px"};
          width: 100vw;
        }
      `}</style>
    </div>
  );
}
