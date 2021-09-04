import Link from "next/link";

import Producto from "../general/producto";

export default function MasVendidos() {
  return (
    <div className="mas-vendidos">
      <div className="mas-vendidos--1 posicion-1">
        <Producto />
        <Producto />
      </div>
      <div className="mas-vendidos--2 posicion-2">
        <div>
          <h3>Mas vendidos</h3>
          <p>Lo mejor agrupado para ti</p>
          <Link href="#">
            <a>Ver los productos</a>
          </Link>
          <img src="/harina.png" />
        </div>
      </div>
      <div className="mas-vendidos--1 posicion-3">
        <Producto />
        <Producto />
      </div>
      <div
        className="mas-vendidos--2 posicion-4"
        style={{ background: "linear-gradient(#ddd 60%, #999)" }}
      >
        <div style={{ color: "#000", border: "2px solid #0002" }}>
          <h3>Acaban de llegar</h3>
          <p>algo</p>
          <Link href="#">
            <a style={{ border: "2px solid #0002" }}>Ver los productos</a>
          </Link>
          <img src="/harina.png" />
        </div>
      </div>
      <style jsx>{`
        .mas-vendidos > div {
          margin: 0.5rem;
        }

        .mas-vendidos--1 {
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: center;
        }

        .mas-vendidos--2 {
          background-image: radial-gradient(
            farthest-corner at 65% 40%,
            #aaa 0%,
            #444 100%
          );
          padding: 1rem;
          width: auto;
        }

        .mas-vendidos--2 > div {
          border: 2px solid #fff3;
          color: #fff;
          display: flex;
          flex-direction: column;
          height: 14rem;
          padding: 1rem;
          position: relative;
        }

        .mas-vendidos--2 > div > h3 {
          font-size: 2em;
          margin-block-start: 1rem;
          margin-block-end: 0;
        }

        .mas-vendidos--2 > div > img {
          bottom: -1rem;
          position: absolute;
          right: -2.8rem;
          width: 50%;
        }

        .mas-vendidos--2 a {
          border: 2px solid #fff3;
          display: flex;
          justify-content: center;
          padding: 0.5rem 0;
          transition: 0.3s;
          text-align: center;
          width: 50%;
        }

        .mas-vendidos--2 a:hover {
          background: #fff3;
        }

        @media screen and (min-width: 550px) {
          .mas-vendidos {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "p1 p2"
              "p4 p3";
          }

          .mas-vendidos--2 > div {
            height: 100%;
          }

          .posicion-1 {
            grid-area: p1;
          }

          .posicion-2 {
            grid-area: p2;
          }

          .posicion-3 {
            grid-area: p3;
          }

          .posicion-4 {
            grid-area: p4;
          }

          .mas-vendidos--2 {
            width: auto;
          }
        }
      `}</style>
    </div>
  );
}
