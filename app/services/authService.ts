import { useFetch } from "~/hooks/useFetch";
import { ILogin, ILoginResponse, IRegister, IRegisterResponse } from "~/types/authInterface";

export const useRegister = (body: IRegister ) => {
    return useFetch<IRegisterResponse>('auth/register', 'POST', { body })
}

export const useLogin = (body: ILogin) => {
    return useFetch<ILoginResponse>('auth/login', 'POST', { body })
}