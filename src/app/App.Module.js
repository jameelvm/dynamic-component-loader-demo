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
var Home_Component_1 = require("../app/home/Home.Component");
var Container_Component_1 = require("../app/container/Container.Component");
var DynamicComponentHost_Directive_1 = require("../app/container/DynamicComponentHost.Directive");
var YourDynamic_Component_1 = require("../app/templates/YourDynamic.Component");
var DynamicComponent_Service_1 = require("./container/DynamicComponent.Service");
var YourDynamic_Module_1 = require("./templates/YourDynamic.Module");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        providers: [DynamicComponent_Service_1.DynamicComponentService, YourDynamic_Module_1.YourDynamicModule],
        declarations: [
            Application_Component_1.MainApplicationComponent,
            Home_Component_1.HomeComponent,
            Container_Component_1.ContainerComponent,
            DynamicComponentHost_Directive_1.DynamicComponentHostDirective,
            YourDynamic_Component_1.YourDynamicComponent
        ],
        exports: [],
        entryComponents: [YourDynamic_Component_1.YourDynamicComponent],
        bootstrap: [Application_Component_1.MainApplicationComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=App.Module.js.map