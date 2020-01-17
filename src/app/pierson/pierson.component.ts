import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, PiersonService } from '../services/pierson.service';

@Component({
  selector: 'app-pierson',
  templateUrl: './pierson.component.html',
  styleUrls: ['./pierson.component.css']
})
export class PiersonComponent implements OnInit {



  results: Observable<any>;
  searchTerm= '';
  type: SearchType = SearchType.all;
  constructor( private _service:PiersonService) { }

  ngOnInit() {
  }

  
  searchChanged(){
    this.results = this._service.searchData(this.searchTerm, this.type);
    console.log(this.searchTerm)


  }

}


