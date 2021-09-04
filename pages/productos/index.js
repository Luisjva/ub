import { useEffect, useState } from "react";

import Producto from "../../components/general/producto";

const todosProductos = [
  {
    nombre: "Harina",
    categoria: ["Embutidos"],
    img: "/productos/harina.png",
    id: 1,
  },
  {
    nombre: "Un Vivere",
    categoria: ["Viveres"],
    img: "/productos/harina.png",
    id: 2,
  },
  {
    nombre: "Queso",
    categoria: ["Charcutería"],
    img: "/productos/queso.png",
    id: 3,
  },
];

export default function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todo");
  const [productos, setProductos] = useState(todosProductos);
  const changeInput = (e) => {
    setBusqueda(e.target.value);
  };

  const changeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  useEffect(() => {
    if (categoria == "Todo" && busqueda == "") {
      setProductos(todosProductos);
    } else {
      let nuevo = [];
      /*
      setProductos([]);
      */
      for (let i = 0; i < todosProductos.length; i++) {
        let p = todosProductos[i].nombre;
        let b = busqueda;
        p = p.toLowerCase();
        b = b.toLowerCase();
        console.log(p, b);
        if (categoria == "Todo" && p.includes(b)) {
          nuevo.push(todosProductos[i]);
        } else if (p.includes(b)) {
          categoria == todosProductos[i].categoria &&
            nuevo.push(todosProductos[i]);
        }
      }
      setProductos(nuevo);
    }
  }, [busqueda, categoria]);

  return (
    <>
      <header>
        <p>Nos encargamos de darle sustento a cada una de los venezolanos</p>
      </header>
      <main>
        <div className="categorias">
          <button
            value="Todo"
            onClick={changeCategoria}
            className={categoria == "Todo" ? "actual" : ""}
          >
            Todo
          </button>
          <button
            value="Viveres"
            onClick={changeCategoria}
            className={categoria == "Viveres" ? "actual" : ""}
          >
            Viveres
          </button>
          <button
            value="Charcutería"
            onClick={changeCategoria}
            className={categoria == "Charcutería" ? "actual" : ""}
          >
            Charcutería
          </button>
          <button
            value="Embutidos"
            onClick={changeCategoria}
            className={categoria == "Embutidos" ? "actual" : ""}
          >
            Embutidos
          </button>
        </div>

        <input value={busqueda} onChange={changeInput} placeholder="Buscar" />

        <div className="productos">
          {productos.map(function (producto) {
            return (
              <Producto
                key={producto.id}
                nombre={producto.nombre}
                img={producto.img}
              />
            );
          })}
        </div>
      </main>

      <style jsx>{`
        header {
          align-items: center;
          background-image: url("/bg.jpg");
          background-size: cover;
          color: #fff;
          display: flex;
          font-size: 1.5rem;
          height: 15rem;
          text-align: center;
          padding: 0 15%;
        }

        input {
          border: 1px solid #0003;
          border-radius: 5px;
          margin: 0.5rem auto;
          outline: none;
          padding: 0.4rem;
          transition: 0.3s;
          width: 100%;
        }

        input:focus {
          border: 1px solid #000b;
        }

        .categorias {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        .categorias > button {
          background: none;
          border: none;
          height: 2rem;
          transition: 0.3s;
        }

        .categorias > button:hover {
          border-bottom: 3px solid #0005;
        }

        .categorias > .actual {
          border-bottom: 3px solid #0007;
        }

        .productos {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </>
  );
}
