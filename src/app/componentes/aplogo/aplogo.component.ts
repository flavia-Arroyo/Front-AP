/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplogo',
  templateUrl: './aplogo.component.html',
  styleUrls: ['./aplogo.component.css']
})
export class AplogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplogo',
  templateUrl: './aplogo.component.html',
  styleUrls: ['./aplogo.component.css']
})
export class AplogoComponent implements OnInit {
  toggle:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  ontoggle(){
    this.toggle = !this.toggle;

  }

}



