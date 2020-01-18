import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oluwaseni',
  templateUrl: './oluwaseni.component.html',
  styleUrls: ['./oluwaseni.component.css']
})
export class OluwaseniComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  pierson(){
    this._router.navigate(['pierson'])
  }
  vijona(){
    this._router.navigate(['vijona'])
  }

}
