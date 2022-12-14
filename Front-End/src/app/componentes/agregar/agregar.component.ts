import { Component, OnInit } from '@angular/core';
import {UserService , Usuario, Country} from "../../services/user.service"
import { Router} from "@angular/router"
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{
  ListarCountries: Country[];
usuario: Usuario={
  _id:"",
  Nombre:"",
  Apellido:"",
  Correo:"",
  Nacimiento:"",
  Telefono:new Number,
  Pais:"",
  Pregunta: new Boolean,
};

constructor(private UserService: UserService, private router: Router)
{

}

ngOnInit(): void {
  this.listarCountries();
  
}
listarCountries(){
  this.UserService.getPaises().subscribe(
    res=>{
      console.log(res)
      this.ListarCountries = <any>res;
      console.log(this.ListarCountries)
    },
    err=> console.log(err)
  )
}
agregar(){
  delete this.usuario._id;
  // this.UserService.addActiv(this.usuario, "create").subscribe()
 this.UserService.addUser(this.usuario).subscribe()
 this.router.navigate(["/inicio"])
}

}
