import { Component, OnInit } from '@angular/core';
import {UserService , Usuario, Country, Actividad} from "../../services/user.service"
import { Router} from "@angular/router"

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  ListarActividad: Actividad[];
 
  constructor(private UserService: UserService, private router: Router)
{

}
ngOnInit(): void {
  this.listarActividad();
}
listarActividad(){
  this.UserService.addActiv().subscribe(
    res=>{
      
      this.ListarActividad = <any>res ;
    },
    err=> console.log(err)
  )
}

}
