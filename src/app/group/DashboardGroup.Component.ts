import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-group',
    templateUrl: 'app/group/DashboardGroup.Template.html'
})

export class DashboardGroupComponent implements OnInit {
    constructor() { }
    var:any=true;
    tiles: any;
    ngOnInit() {
        this.tiles = [
            { templateName: "ImageTemplate1", componentName: "ImageTextWidgetComponent" ,someText:"ImageTextWidgetComponent Text" },
            { templateName: "ImageTemplate2", componentName: "IconWidgetComponent",someText:"IconWidgetComponent Text" },
            { templateName: "ImageTemplate3", componentName: "ImageTextWidgetComponent" ,someText:"ImageTextWidgetComponent Text"},
            { templateName: "ImageTemplate4", componentName: "ImageTextWidgetComponent",someText:"ImageTextWidgetComponent Text" },
            { templateName: "ImageTemplate5", componentName: "ImageTextWidgetComponent",someText:"ImageTextWidgetComponent Text" }
        ];
    }
}