import { Component,OnInit } from '@angular/core';
import {UserService , Usuario, Country} from "../../services/user.service"
import { Router, ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements  OnInit{
  ListarCountries: Country[];
  usuario: Usuario={
    _id: "",
    Nombre:"",
    Apellido:"",
    Correo:"",
    Nacimiento:"",
    Telefono:new Number,
    Pais:"",
    Pregunta: new Boolean,
  };

constructor(private UserService: UserService, private router: Router, private activeRoute:ActivatedRoute ){}

ngOnInit(): void {
  this.listarCountries();
  
}


listarCountries(){
  this.UserService.getPaises().subscribe(
    res=>{
    
      this.ListarCountries = <any>res;
      
    },
    err=> console.log(err)
  )
}

modificar(){
  this.usuario._id= this.activeRoute.snapshot.params._id;
 console.log(this.usuario)
this.UserService.editUser(this.usuario._id! , this.usuario).subscribe(
  res=>{
console.log(res)
  },
  err=> console.log(err)
)
this.router.navigate(["/inicio"])
}

}
