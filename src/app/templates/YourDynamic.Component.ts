import { Component, OnInit, Input, ReflectiveInjector, Injector } from '@angular/core';
@Component({
    selector: 'your-dynamiccomponent',
    templateUrl: 'app/templates/YourDynamicComponent.html'
})

export class YourDynamicComponent implements OnInit {
    @Input() data: any;   
    constructor() {
      
    }
    ngOnInit() {
       
    }
}


