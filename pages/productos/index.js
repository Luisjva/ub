import { useEffect, useState } from "react";

import Producto from "../../components/general/producto";
import { getQueryVariable } from "../../utilidades";

const todosProductos = [
  {
    nombre: "Harina",
    categoria: ["Embutidos"],
    img: "/harina.png",
    id: 1,
  },
  {
    nombre: "Un Vivere",
    categoria: ["Viveres"],
    img: "/viveres.png",
    id: 2,
  },
  {
    nombre: "Queso",
    categoria: ["Charcutería"],
    img: "/queso.png",
    id: 3,
  },
  {
    nombre: "Harina pan",
    categoria: ["Embutidos"],
    img: "/harina.png",
    id: 4,
  },
  {
    nombre: "Otro Vivere",
    categoria: ["Viveres"],
    img: "/viveres.png",
    id: 5,
  },
  {
    nombre: "Jamon",
    categoria: ["Charcutería"],
    img: "/queso.png",
    id: 6,
  },
  {
    nombre: "Harina de trigo",
    categoria: ["Embutidos"],
    img: "/harina.png",
    id: 7,
  },
  {
    nombre: "Vivere",
    categoria: ["Viveres"],
    img: "/viveres.png",
    id: 8,
  },
  {
    nombre: "Mortadela",
    categoria: ["Charcutería"],
    img: "/queso.png",
    id: 9,
  },
];

export default function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todo");
  const [productos, setProductos] = useState([]);
  const changeInput = (e) => {
    setBusqueda(e.target.value);
  };

  const changeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  useEffect(() => {
    if (getQueryVariable("cat")) {
      setCategoria(getQueryVariable("cat"));
    } else {
      setCategoria("Todo");
    }
  }, []);

  useEffect(() => {
    setProductos([]);
    let nuevo = [];
    if (categoria == "Todo" && busqueda == "") {
      nuevo = todosProductos;
    } else if (
      categoria == "Todo" ||
      categoria == "Viveres" ||
      categoria == "Charcutería" ||
      categoria == "Embutidos"
    ) {
      for (let i = 0; i < todosProductos.length; i++) {
        let p = todosProductos[i].nombre;
        let b = busqueda;
        p = p.toLowerCase();
        b = b.toLowerCase();
        if (categoria == "Todo" && p.includes(b)) {
          nuevo.push(todosProductos[i]);
        } else if (p.includes(b)) {
          categoria == todosProductos[i].categoria &&
            nuevo.push(todosProductos[i]);
        }
      }
    } else {
      nuevo = todosProductos;
      setCategoria("Todo");
    }
    setProductos(nuevo);
  }, [busqueda, categoria]);

  return (
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

      <style jsx>{`
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
    </main>
  );
}
