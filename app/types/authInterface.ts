export interface IRegister {
    name:string
    lastName:string
    email:string
    password:string
    dateBirth:string
}

export interface ILogin {
    email:string
    password:string
}

export interface ILoginResponse{
    token: string
    role:string
}

export interface IRegisterResponse{
    message:string
}