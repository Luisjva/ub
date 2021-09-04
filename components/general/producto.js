import Image from "next/image";

import { fonts } from "../../theme";

export default function Producto({ nombre, img }) {
  return (
    <div className="producto">
      <img src={img ? img : "/productos/Harina.png"} />
      <div>
        <h3>{nombre ? nombre : "Harina pan"}</h3>
        <p className="precio">
          <span className="precio__moneda">$</span>150
          <span className="precio__centavos">1</span>
        </p>
      </div>
      <style jsx>{`
        .producto {
          margin: 0.5rem;
          transition: 0.3s;
          width: auto;
        }

        .producto > img {
          width: 100%;
        }

        .producto:hover {
          transform: scale(1.05);
        }

        .producto > div {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        h3 {
          ${fonts.text},
          font-size: 1.5rem;
          margin-block-start: 0.5rem;
          margin-block-end: 0.5rem;
        }

        p {
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .precio {
          position: relative;
          font-size: 1.3rem;
        }

        .precio > span {
          font-size: 0.7em;
          position: absolute;
        }

        .precio__moneda {
          left: -0.75em;
        }

        .precio__centavos {
          right: -0.6em;
        }
      `}</style>
    </div>
  );
}
