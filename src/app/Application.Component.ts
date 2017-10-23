import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'main-appcontainer',
  template: `
    <div>
      <home-component></home-component>
    </div>
  `
})
export class MainApplicationComponent implements OnInit {
  constructor() {}

  ngOnInit() {
   
  }
}

