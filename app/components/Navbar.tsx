import { Link } from "@remix-run/react";

const logo = "/assets/images/logo.svg";
const btnLogin = '/assets/images/btnLogin.svg'
const btnRegister = '/assets/images/btnRegister.svg'
export default function Navbar() {
  return (
    <div>
      <nav className="relative flex ">
        <div className="absolute top-4 bg-[linear-gradient(90deg,#00266B_19.38%,#4E6291_37.55%,#5F77AB_82.93%,#708BC6_96.28%)] h-16 w-full z-0"></div>
        <ul className="flex font-raleway font-bold text-white w-5/12 justify-evenly items-center z-10">
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/inicio/#oportunidades">Oportunidades</Link>
          </li>
          <li>
            <Link to="/inicio/#servicios">Servicio</Link>
          </li>
          <li>
            <Link to="/novedades">Novedades</Link>
          </li>
        </ul>
        <div className="w-2/12 flex justify-center z-10">
        
          <img className="w-28" src={logo} alt="logo" />
        </div>
        <ul className="flex text-[#1D1854] text- w-5/12 justify-evenly items-center z-10">
          <li>
            <Link to="/ingreso">
                <img className="w-36" src={btnLogin} alt="btn" />
                
            </Link>
          </li>
          <li>
            <Link to="/registro">
                <img className="w-40" src={btnRegister} alt="btn" />
                
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
