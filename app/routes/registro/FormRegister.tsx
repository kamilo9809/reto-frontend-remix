

const buttongoogle = "/assets/images/buttongoogle.svg";
const buttonfacebook = "/assets/images/buttonfacebook.svg";
const imagerocket ="/assets/images/imagerocket.svg";
const name = "/assets/icons/name.svg";
const lastname = "/assets/icons/lastname.svg";
const birthday = "/assets/icons/birthday.svg";
const email = "/assets/icons/email.svg";
const password = "/assets/icons/password.svg";

export const FormRegister = () => {
    const styleinput="flex mb-5 bg-[#ECECEC] py-2 px-3 gap-4 rounded-lg"  
    const styleform="flex flex-col" 
    const changeinput="bg-transparent text-black placeholder-black font-bold focus:outline-none"
  return (
    <div className="pb-20">
            <div className="flex px-10 pt-20">
                <div className="shadow-2xl px-12 py-8 w-6/12">

                    <div className="font-poppins">
                        <h2 className="text-3xl py-10">¿Preparado para encontrar tu próxima <span className="text-5xl font-bold text-[#00266B]">oportunidad? 👋</span></h2>

                    </div>
                    <div className="pb-5">
                        <div>
                            <img src={buttongoogle} alt="buttongoogle" />
                        </div>
                        <div>
                            <img src={buttonfacebook} alt="buttonfacebook" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="h-1 w-full border-t-2 pt-5"></div>
                       
                        <div className="h-1 w-full border-t-2 pt-5"></div>
                    </div>
                    <form>
                        <div className={styleinput}>
                            <img className="w-6" src={name} alt="name" />
                            <div className={styleform}>
                                <label htmlFor="Nombre"> Nombre</label>
                                <input type="text"
                                className={changeinput}
                                    placeholder="Nombre" />
                            </div>
                        </div>
                        <div className={styleinput}>
                            <img className="w-6" src={lastname} alt="lastname" />
                            <div className={styleform}>
                                <label htmlFor="Apellido"> Apellido</label>
                                <input type="text"
                                className={changeinput}
                                    placeholder="Apellido" />
                            </div>
                        </div>
                        <div className={styleinput}>
                            <img className="w-6" src={birthday} alt="birthday" />
                            <div className={styleform}>
                                <label htmlFor="Dia de nacimiento">Dia de naciemiento</label>
                                <input type="date"
                                className={changeinput}
                                    placeholder="DD/MM/AAAA" />
                            </div>
                        </div>
                        <div className={styleinput}>
                            <img className="w-6" src={email} alt="email" />
                            <div className={styleform}>
                                <label htmlFor="Email"> Email</label>
                                <input type="email"
                                className={changeinput}
                                    placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className={styleinput}>
                            <img className="w-6" src={password} alt="password" />
                            <div className={styleform}>
                                <label htmlFor="Contraseña"> Contraseña</label>
                                <input type="password"
                                className={changeinput}
                                    placeholder="******" />
                            </div>
                        </div>
                        <div className={styleinput}>
                            <img className="w-6" src={password} alt="password" />
                            <div className={styleform}>
                                <label htmlFor="Confirma tu contraseña"> Confirma tu contraseña</label>
                                <input type="password"
                                className={changeinput}
                                    placeholder="******" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#FAA307] w-3/6 py-3 rounded-lg"> Crear Cuenta</button>
                        </div>

                    </form>
                </div>
                <div className="w-6/12 pt-36">
                    <img src={imagerocket} alt="imagerocket" />
                </div>
            </div>
        </div>
  )
}
