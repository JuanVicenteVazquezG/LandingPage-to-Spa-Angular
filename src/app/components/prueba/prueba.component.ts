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
  public surname: String;
  constructor(private _route: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      if (params.name) {
        this.title = params.name;
      }
      else {
        this.title = 'No params';
      }

      if (params.surname) {
        this.surname = params.surname;
      }
      else {
        this.surname = 'No Surname';
      }
    });
  }
}
