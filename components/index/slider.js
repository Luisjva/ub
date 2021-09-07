import { useEffect, useState } from "react";
import Link from "next/link";

import Producto from "../../components/general/producto";

let contenedor = null;

export default function SliderH(props) {
  const [width, setWidth] = useState(0);

  const scrollHorizontal = (e) => {
    console.log(e);
    let html = e.target.id;
    console.log(html);
    if (html.includes("catalogo")) {
      contenedor.scroll(0, 0);
      setTimeout(() => {
        window.scroll(0, props.height);
      }, 200);
    } else if (html.includes("centro")) {
      contenedor.scroll(props.width, 0);
      setTimeout(() => {
        window.scroll(0, props.height);
      }, 200);
    } else if (html.includes("aporte")) {
      contenedor.scroll(props.width * 2, 0);
      setTimeout(() => {
        window.scroll(0, props.height);
      }, 200);
    } else {
      props.scrollArriba();
    }
  };

  const scrollHorizontalPc = (e) => {
    console.log(e);
    let html = e.target.id;
    console.log(html);
    if (html.includes("catalogo")) {
      contenedor.scroll(0, 0);
    } else if (html.includes("centro")) {
      contenedor.scroll(props.width, 0);
    } else if (html.includes("aporte")) {
      contenedor.scroll(props.width * 2, 0);
    }
  };

  useEffect(() => {
    let widthActual = innerWidth;
    contenedor = document.querySelector(".div");
    setTimeout(() => {
      contenedor.scroll(widthActual, 0);
      setWidth(widthActual);
    }, 1000);
  }, []);

  return (
    <div
      onTouchEnd={scrollHorizontal}
      className="div"
      style={{ height: props.height, overflowX: "hidden" }}
    >
      <div className="slider-1">
        <div className="slider-1__contenedor">
          <div className="p1">
            <Producto />
          </div>
          <div className="p2">
            <h3>
              Si no lo tenemos, lo conseguimos
              <br />
              Si no lo conseguimos, lo fabricamos
            </h3>
            <Link href="/productos">
              <a>Ver todos los productos</a>
            </Link>
          </div>
          <div className="p3">
            <Producto />
          </div>
          <div className="p4">
            <Producto />
          </div>
          <div className="p5">
            <Producto />
          </div>
        </div>
        <div className="link">
          <p id="centro" onClick={scrollHorizontalPc} className="link__flecha">
            <span id="centro">&#62;</span>
          </p>
        </div>
      </div>
      <div className="slider-2">
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
        <div className="link">
          <p
            id="catalogo"
            onClick={scrollHorizontalPc}
            className="link__flecha"
          >
            <span id="catalogo">&#60;</span> Catalogo
          </p>
          <p id="aporte" onClick={scrollHorizontalPc} className="link__flecha">
            Aporte <span id="aporte">&#62;</span>
          </p>
        </div>
      </div>
      <div
        style={{
          height: props.height - 100 + "px",
          width: props.width + "px",
          background: "#888",
        }}
      >
        <div className="link">
          <p id="centro" onClick={scrollHorizontalPc} className="link__flecha">
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
        }

        .slider-1 .link {
          display: flex;
          justify-content: flex-end;
        }

        .slider-1 {
          display: grid;
          grid-template-rows: auto 3rem;
          height: ${props.height + "px"};
          padding: 0 5%;
          width: ${props.width + "px"};
          }

        .slider-1__contenedor {
          display: grid;
          grid-template-areas:
            "p1 p2 p2"
            "p3 p4 p5";
          grid-template-columns: repeat(3, 1fr);
          margin: 1rem;
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
          grid-template-rows: auto 3rem;
          height: ${props.height + "px"};
          text-align: center;
          padding: 0 5%;
          width: ${props.width + "px"};
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
