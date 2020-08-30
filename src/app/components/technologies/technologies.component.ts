import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  public technology: Array<{ icon: string, name: string }>;
  constructor() {
    this.technology = [
      { icon: '../assets/images/htmlncss.svg', name: 'HTML/CSS' },
      { icon: '../assets/images/javascript.svg', name: 'Javascript' },
      { icon: '../assets/images/expressjs.svg', name: 'ExpressJS' },
      { icon: '../assets/images/framework.svg', name: 'ReactJS / AngularJS /VueJS' },
      { icon: '../assets/images/mongodb.svg', name: 'MongoDB' },
      { icon: '../assets/images/typescript.svg', name: 'TypeScript' },
      { icon: '../assets/images/github.svg', name: 'GIT - GITHUB' },
    ];
  }

  ngOnInit(): void {
    console.log(this.technology);
  }

}
