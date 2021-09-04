import { fonts } from "../../theme";

export default function Header() {
  return (
    <header>
      <p>
        Si no lo tenemos, lo conseguimos,
        <br />y si no, lo fabricamos.
      </p>
      <span>PD: También vendemos viveres</span>
      <style jsx>{`
        header {
          align-items: center;
          background: url("/bg.jpg");
          background-size: cover;
          display: flex;
          justify-content: center;
          flex-direction: column;
          position: relative;
          height: 15rem;
        }

        p {
          ${fonts.title};
          color: #fff;
          font-size: 1.5rem;
          font-weight: 800;
          text-align: center;
        }

        span {
          bottom: 10px;
          color: #fff;
          left: 50%;
          position: absolute;
          text-align: center;
          transform: translate(-50%);
        }
      `}</style>
    </header>
  );
}
