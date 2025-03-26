import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-page',
  standalone: false,
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent {
  @Input()
  title:string="";
  @Input()
  link:string="";
  @Input()
  image:string="assets/image404.jpg";

  ngOnInit():void{}

  constructor(){}


}
