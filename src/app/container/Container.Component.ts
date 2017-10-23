
import { Component, Input, OnInit, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { DynamicComponentHostDirective } from './DynamicComponentHost.Directive';
import { YourInputDataModel  } from './YourInputData.Model';
import { DynamicComponentService  } from "./DynamicComponent.Service";


@Component({
    selector: 'container',
    templateUrl: 'app/container/ContainerComponent.Template.html'
})

export class ContainerComponent implements OnInit {
    @Input() tile: any;
    @ViewChild(DynamicComponentHostDirective) widgetHost: DynamicComponentHostDirective;
    constructor(private _componentFactoryResolver: ComponentFactoryResolver,private dynamicComponentService :DynamicComponentService ) {

    }

    ngOnInit() {
         this.renderComponents();
    }
    ngAfterViewInit() {
       
    }
    renderComponents() {
        let component:any=this.dynamicComponentService.getComponent(this.tile.componentName);
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
        let viewContainerRef = this.widgetHost.viewContainerRef;
            viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<YourInputDataModel >componentRef.instance).data = this.tile;

    }
}