import { Component,OnInit } from '@angular/core';
import {UserService,Usuario,Country } from "../../services/user.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

ListarUsers: Usuario[];
ListarCountries: Country[];
constructor(private UserServices: UserService, private router: Router){}

ngOnInit(): void {
this.listarUsers();
this.listarCountries();
}

listarUsers(){
  this.UserServices.getUsuarios().subscribe(
    res=>{
      console.log(res)
      this.ListarUsers = <any>res;
    },
    err=> console.log(err)
  )
}

listarCountries(){
  this.UserServices.getPaises().subscribe(
    res=>{
      console.log(res)
      this.listarCountries = <any>res;
    },
    err=> console.log(err)
  )
}

eliminar(_id:string){
  this.UserServices.deleteUser(_id).subscribe(
    res=>{
      console.log("equipo eliminado");
      this.listarUsers();
    },
    err=> console.log(err)
  )
}

modificar(_id:string){
  this.router.navigate(["/edit/"+ _id])
}



}
