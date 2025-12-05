import { Injectable, signal } from '@angular/core';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const instancia: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
})

instancia.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token')
    console.log('interceptor')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

@Injectable({
  providedIn: 'root',
})
export class ConectService {


  saludo = signal("hola mundo")
  async getPostDirect(email: string, password: string): Promise<any> {

    try {
      console.log("servicio axios")
      // axios.get devuelve una AxiosResponse. Los datos están en response.data.
      const response: AxiosResponse<any> = await instancia.post<any>("/login", { email, password });
      console.log('Respuesta directa de Axios recibida.');
      return response.data;
    } catch (error) {
      console.error('Error al obtener el post con Axios:', error);
      // Aquí puedes manejar el error, por ejemplo, notificando al usuario.
      return undefined;
    }
  }

}
