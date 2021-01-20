import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensaje } from '../model/mensaje';

@Component({
  selector: 'app-confirmacion-mensaje',
  templateUrl: './confirmacion-mensaje.page.html',
  styleUrls: ['./confirmacion-mensaje.page.scss'],
})
export class ConfirmacionMensajePage implements OnInit {

  mensaje: Mensaje;
  work:boolean;
  constructor(private route: ActivatedRoute, private router : Router) {

    
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.mensaje = this.router.getCurrentNavigation().extras.state.mensaje;
        console.log(this.mensaje);
        this.work= this.router.getCurrentNavigation().extras.state.work;
        console.log(this.work);
      }
    });

  }
    ngOnInit() {
      
    }

}
