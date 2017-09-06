import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainApplicationComponent } from './Application.Component';
import { DashboardHostComponent } from '../app/host/DashboardHost.Component';
import { DashboardGroupComponent } from '../app/group/DashboardGroup.Component';
import { DashboardTileComponent } from '../app/tile/DashboardTitle.Component';
import {DashboardTileWidgetHostDirective} from '../app/tile/DashbardWidgetHost.Directive'
import {ImageTextWidgetComponent} from '../app/templates/ImageTextWidget.Component'
import { WidgetComponentService } from "./tile/WidgetComponent.Service";
import { ImageWidgetModule } from "./templates/Image.Module";
import { IconWidgetComponent } from "./templates/IconWidget.Component";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [BrowserModule,HttpModule],
    providers: [WidgetComponentService,ImageWidgetModule],
    declarations: [
        MainApplicationComponent,
        DashboardHostComponent,
        DashboardGroupComponent,
        DashboardTileComponent,
        DashboardTileWidgetHostDirective,
        ImageTextWidgetComponent,
        IconWidgetComponent
        ],
    exports: [],

    entryComponents: [ImageTextWidgetComponent,IconWidgetComponent],
    bootstrap: [MainApplicationComponent]
})
export class DashboardModule {
    constructor() {

    }
}

