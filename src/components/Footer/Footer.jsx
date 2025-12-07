import Copyright from "../Copyright/Copyrigt";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <h1>Desarrollado Ramon Ernesto Garcia Navarro</h1>
        <p>Aplicacion desarrollada en React 18, Node.js, Mongo DB</p>
      </footer>
      <Copyright />
    </>
  );
}

export default Footer;
