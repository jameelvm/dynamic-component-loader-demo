import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainApplicationComponent } from './Application.Component';
import { HomeComponent } from '../app/home/Home.Component';
import { ContainerComponent } from '../app/container/Container.Component';
import {DynamicComponentHostDirective} from '../app/container/DynamicComponentHost.Directive'
import {YourDynamicComponent} from '../app/templates/YourDynamic.Component'
import { DynamicComponentService  } from "./container/DynamicComponent.Service";
import { YourDynamicModule } from "./templates/YourDynamic.Module";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [BrowserModule,HttpModule],
    providers: [DynamicComponentService ,YourDynamicModule],
    declarations: [
        MainApplicationComponent,
        HomeComponent,
        ContainerComponent,
        DynamicComponentHostDirective,
        YourDynamicComponent
        ],
    exports: [],

    entryComponents: [YourDynamicComponent],
    bootstrap: [MainApplicationComponent]
})
export class AppModule {
    constructor() {

    }
}

