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
      { icon: 'src\assets\images\html and css.svg', name: 'HTML/CSS' },
      { icon: 'src\assets\images\javascript.svg', name: 'Javascript' },
      { icon: 'src\assets\images\expressjs.svg', name: 'ExpressJS' },
      { icon: 'src\assets\images\framework.svg', name: 'ReactJS / AngularJS /VueJS' },
      { icon: 'src\assets\images\mongodb.SVG', name: 'MongoDB' },
      { icon: 'src\assets\images\typescript.svg', name: 'TypeScript' },
      { icon: 'src\assets\images\github.svg', name: 'GIT - GITHUB' },
    ];
  }

  ngOnInit(): void {
  }

}
