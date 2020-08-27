import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
 public title: String;
  constructor(private _route: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.title = params.nombre;
    });
  }
}
