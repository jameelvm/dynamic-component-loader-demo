
import { Component, Input, OnInit, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { DashboardTileWidgetHostDirective } from './DashbardWidgetHost.Directive';
import { TileModel } from './Tile.Model';
import { WidgetComponentService } from "./WidgetComponent.Service";


@Component({
    selector: 'dashboard-tile',
    templateUrl: 'app/tile/DashboardTile.Template.html'
})

export class DashboardTileComponent implements OnInit {
    @Input() tile: any;
    @ViewChild(DashboardTileWidgetHostDirective) widgetHost: DashboardTileWidgetHostDirective;
    constructor(private _componentFactoryResolver: ComponentFactoryResolver,private widgetComponentService:WidgetComponentService) {

    }

    ngOnInit() {
         this.renderComponents();
    }
    ngAfterViewInit() {
       
    }
    renderComponents() {
        let component:any=this.widgetComponentService.getComponent(this.tile.componentName);
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
        let viewContainerRef = this.widgetHost.viewContainerRef;
            viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<TileModel>componentRef.instance).data = this.tile;

    }
}