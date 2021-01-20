import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { worker } from 'cluster';
import { Mensaje } from '../model/mensaje';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

 
  worked: boolean = false;
  mens: Mensaje = new Mensaje();





  constructor(public router: Router) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.mens,this.worked);

    let params: NavigationExtras = {
      state: {
        msg: this.mens,
        worket: this.worked
      }
    };

    this.router.navigate(['/confirmacion-mensaje'], params);
  }

}
