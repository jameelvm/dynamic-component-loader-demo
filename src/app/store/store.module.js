"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var mycomponentfactory_1 = require("./mycomponentfactory");
var WidgetsStoreModule = (function () {
    function WidgetsStoreModule() {
    }
    return WidgetsStoreModule;
}());
WidgetsStoreModule = __decorate([
    core_1.NgModule({
        declarations: [],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
        ],
        providers: [mycomponentfactory_1.WidgetsStoreFactory],
        bootstrap: []
    })
], WidgetsStoreModule);
exports.WidgetsStoreModule = WidgetsStoreModule;
//# sourceMappingURL=store.module.js.map