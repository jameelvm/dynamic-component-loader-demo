"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var Application_Component_1 = require("./Application.Component");
var DashboardHost_Component_1 = require("../app/host/DashboardHost.Component");
var DashboardGroup_Component_1 = require("../app/group/DashboardGroup.Component");
var DashboardTitle_Component_1 = require("../app/tile/DashboardTitle.Component");
var DashbardWidgetHost_Directive_1 = require("../app/tile/DashbardWidgetHost.Directive");
var ImageTextWidget_Component_1 = require("../app/templates/ImageTextWidget.Component");
var WidgetComponent_Service_1 = require("./tile/WidgetComponent.Service");
var Image_Module_1 = require("./templates/Image.Module");
var IconWidget_Component_1 = require("./templates/IconWidget.Component");
var http_1 = require("@angular/http");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        providers: [WidgetComponent_Service_1.WidgetComponentService, Image_Module_1.ImageWidgetModule],
        declarations: [
            Application_Component_1.MainApplicationComponent,
            DashboardHost_Component_1.DashboardHostComponent,
            DashboardGroup_Component_1.DashboardGroupComponent,
            DashboardTitle_Component_1.DashboardTileComponent,
            DashbardWidgetHost_Directive_1.DashboardTileWidgetHostDirective,
            ImageTextWidget_Component_1.ImageTextWidgetComponent,
            IconWidget_Component_1.IconWidgetComponent
        ],
        exports: [],
        entryComponents: [ImageTextWidget_Component_1.ImageTextWidgetComponent, IconWidget_Component_1.IconWidgetComponent],
        bootstrap: [Application_Component_1.MainApplicationComponent]
    }),
    __metadata("design:paramtypes", [])
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=Dashboard.Module.js.map