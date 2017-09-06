import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'main-appcontainer',
  template: `
    <div>
      <dashboard-host></dashboard-host>
    </div>
  `
})
export class MainApplicationComponent implements OnInit {
  constructor() {}

  ngOnInit() {
   
  }
}

