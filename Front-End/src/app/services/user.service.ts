import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3001/api/usuarios"
  country = "http://localhost:3001/api/country"
  activity = "http://localhost:3001/api/actividades"
  constructor(private http: HttpClient) { 
 
  }

//get usuarios
getUsuarios(){
  return this.http.get(this.url)
}

getUser(id:string){
  return this.http.get(this.url+ "/" +id)
}

addUser(nombre:any){
return this.http.post(this.url, nombre)
}

deleteUser(id:string){
  return this.http.delete(this.url+ "/" + id)
}

editUser(id:string, nombre: any){
  console.log(nombre)
  return this.http.put(this.url+ "/" + id , nombre)
}

getPaises(){
  return this.http.get(this.country)
}

addActiv(){
  return this.http.get(this.activity)
}




}
export interface Usuario {
  _id?:string ;
  Nombre?:string;
  Apellido?:string;
  Correo?:string;
  Nacimiento?:string;
  Telefono?:Number;
  Pais?:string;
  Pregunta?:Boolean;
}



export interface Country {
  name?:string ;
cod?:string
}

export interface Actividad {
  _id?:string ;
  Create_date?:String;
  Id_usuario?:string ;
  Actividad?:string;
}