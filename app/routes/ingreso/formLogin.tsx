import { useNavigate } from "@remix-run/react";
import React, { useState } from "react";
import { useLogin } from "~/services/authService";
import { ILogin } from "~/types/authInterface";

const buttonGoogle = "/assets/images/buttongoogle.svg";
const buttonFacebook = "/assets/images/buttonfacebook.svg";
const javi = "/assets/images/javi.svg";
const email = "/assets/icons/birthday.svg";
const password = "/assets/icons/password.svg";

export default function FormLogin() {
  const navigate = useNavigate();
  const [body, setBody] = useState<ILogin | null>(null);
  const loginResponse = useLogin(body!);

  const inputContainer = "flex bg-[#ECECEC] px-2 rounded-lg gap-3";
  const inputStyle = "flex flex-col";
  const input = "bg-transparent focus:outline-none";

  const loginSession = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      setBody({
        email: data.email as string,
        password: data.password as string,
      });
      console.log(loginResponse[0].role);
      
      if (loginResponse[0].role == undefined) {
        alert('intenta otra vez es un bug jajajaj')
      }else if (loginResponse[0].role == 'user') {
        navigate('/novedades')
      }else{        
        navigate('/admin')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={loginSession} className="xl:flex pt-10 px-36 pb-14">
      {/* en vez del div va un form con su logica de ingreso desde el servidor */}
      <div>
        <img src={javi} alt="javi" />
      </div>
      <div className="shadow-2xl p-3 bg-white rounded-lg space-y-5 px-10 pt-5 ">
        <div>
          <div>
            <h2 className="text-4xl pb-14">
              Bienvenido a tu <p></p>
              <span className="font-bold text-[#00266B]">
                Banco de oportunidades
              </span>
            </h2>
          </div>
          <button>
            <img src={buttonGoogle} alt="button google" />
            <img src={buttonFacebook} alt="button facebook" />
          </button>
        </div>
        <hr />
        <div className={inputContainer}>
          <img className="w-8" src={email} alt="email" />
          <div className={inputStyle}>
            <label htmlFor="email">Email</label>
            <input
              className={input}
              type="text"
              placeholder="Email"
              name="email"
              required
            />
          </div>
        </div>
        <div className={inputContainer}>
          <img className="w-8" src={password} alt="password" />
          <div className={inputStyle}>
            <label htmlFor="password">Contraseña</label>
            <input
              className={input}
              type="password"
              placeholder="Contraseña"
              name="password"
              required
            />
          </div>
        </div>
        <div className="flex justify-between py-8">
          <div className="space-x-2 ">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Recordarme</label>
          </div>
          <div>
            <a href="*" className="text-[#FAA307]">
              Olvide mi contraseña
            </a>
          </div>
        </div>
        <div>
          <button className="w-full bg-[#FAA307] rounded-lg py-3" type="submit">
            Login
          </button>
        </div>
        <div className="text-center pt-10 pb-14">
          <a href="*">
            ¿No tienes una cuenta?{""}
            <span className="text-[#FAA307]"> Registraté </span>
          </a>
        </div>
      </div>
    </form>
  );
}
