import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgBack:string="assets/orca_brb_logo.png";

  constructor(){}

}
