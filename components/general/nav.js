import Link from "next/link";
import { useEffect } from "react";

import { colors, fonts } from "../../theme";

let navBtn1 = null,
  navBtn2 = null,
  navBtn3 = null,
  navUl = null;

export default function Nav() {
  useEffect(() => {
    navBtn1 = document.querySelector(".nav__btn-1");
    navBtn2 = document.querySelector(".nav__btn-2");
    navBtn3 = document.querySelector(".nav__btn-3");
    navUl = document.querySelector(".nav__ul");
  }, []);

  const clickNavBtn = () => {
    navBtn1.classList.toggle("nav__btn-1--closed");
    navBtn2.classList.toggle("nav__btn-2--closed");
    navBtn3.classList.toggle("nav__btn-3--closed");
    navUl.classList.toggle("nav__ul--open");
  };
  return (
    <nav>
      <Link href="/">
        <a>
          <p>UltraBodegon</p>
        </a>
      </Link>
      <div className="nav__right">
        <div onClick={clickNavBtn} className="nav__btn">
          <div className="nav__btn-1"></div>
          <div className="nav__btn-2"></div>
          <div className="nav__btn-3"></div>
        </div>
        <ul className="nav__ul">
          <Link href="/">
            <a onClick={clickNavBtn}>
              <li>Inicio</li>
            </a>
          </Link>
          <Link href="/productos">
            <a onClick={clickNavBtn}>
              <li>Productos</li>
            </a>
          </Link>
        </ul>
      </div>
      <style jsx>{`
        nav {
          align-content: center;
          background: ${colors.primary};
          color: ${colors.white};
          display: flex;
          justify-content: space-between;
          padding: 0 0.5rem;
          position: fixed;
          width: 100%;
          z-index: 100;
        }

        a {
          align-items: center;
          display: flex;
          height: 3rem;
          padding: auto 0.5rem;
          transition: 0.3s;
        }

        nav p {
          ${fonts.title};
          font-size: 1.4rem;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .nav__right {
          align-items: center;
          display: flex;
        }

        .nav__ul {
          background: #000;
          left: 0;
          list-style-type: none;
          margin-block-end: 0;
          margin-block-start: 0;
          padding-inline-start: 0;
          position: absolute;
          top: -100vh;
          transition: 0.3s;
          width: 100%;
        }

        .nav__ul--open {
          top: 3rem;
        }

        .nav__ul a {
          border-top: 1px solid #fff9;
          display: flex;
          height: 3rem;
          justify-content: center;
          width: 100%;
        }

        .nav__ul a:hover {
          background: #fff7;
        }

        .nav__btn {
          height: 40px;
          position: relative;
          width: 40px;
          cursor: pointer;
        }

        .nav__btn > div {
          background: ${colors.white};
          border-radius: 50px;
          height: 4px;
          opacity: 1;
          position: absolute;
          transition: 0.3s;
          width: 100%;
        }

        .nav__btn-1 {
          top: 15%;
        }

        .nav__btn-2 {
          transform: translateY(-50%);
          top: 50%;
        }

        .nav__btn-3 {
          bottom: 15%;
        }

        .nav__btn-1--closed,
        .nav__btn-3--closed {
          top: 45%;
          transform: translateY(-50%);
        }

        .nav__btn-1--closed {
          transform: rotate(-45deg);
        }

        .nav__btn-2--closed {
          display: none;
        }

        .nav__btn-3--closed {
          transform: rotate(45deg);
        }

        @media screen and (min-width: 450px) {
          .nav__ul {
            background: none;
            display: flex;
            left: auto;
            position: relative;
            top: 0;
            transition: 0.3s;
            width: auto;
          }

          .nav__ul--open {
            top: 0;
          }

          .nav__ul a {
            border-top: none;
            padding: 0 0.5rem;
            width: 100%;
          }

          .nav__btn {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
