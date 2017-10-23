import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-component',
    templateUrl: 'app/home/HomeComponent.Template.html'
})

export class HomeComponent implements OnInit {
    constructor() { }
    var:any=true;
    tiles: any;
    ngOnInit() {
        this.tiles = [
            { templateName: "ImageTemplate1", componentName: "YourDynamicComponent" ,someText:"YourDynamicComponent Text" },
            { templateName: "ImageTemplate3", componentName: "YourDynamicComponent" ,someText:"YourDynamicComponent Text"},
            { templateName: "ImageTemplate4", componentName: "YourDynamicComponent",someText:"YourDynamicComponent Text" },
            { templateName: "ImageTemplate5", componentName: "YourDynamicComponent",someText:"YourDynamicComponent Text" }
        ];
    }
}