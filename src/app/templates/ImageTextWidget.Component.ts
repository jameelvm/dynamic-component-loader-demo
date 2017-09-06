import { Component, OnInit, Input, ReflectiveInjector, Injector } from '@angular/core';
@Component({
    selector: 'dashboard-imagetextwidget',
    templateUrl: 'app/templates/ImageTextWidget.html'
})

export class ImageTextWidgetComponent implements OnInit {
    @Input() data: any;
    
    constructor() {
      
    }
  
    ngOnInit() {
       
    }
}


