"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var YourDynamic_Component_1 = require("./YourDynamic.Component");
var forms_1 = require("@angular/forms");
var YourDynamicModule = (function () {
    function YourDynamicModule() {
    }
    return YourDynamicModule;
}());
YourDynamicModule = __decorate([
    core_1.NgModule({
        declarations: [
            YourDynamic_Component_1.YourDynamicComponent
        ],
        imports: [
            common_1.CommonModule, forms_1.FormsModule
        ],
        exports: [YourDynamic_Component_1.YourDynamicComponent],
        providers: []
    })
], YourDynamicModule);
exports.YourDynamicModule = YourDynamicModule;
//# sourceMappingURL=YourDynamic.Module.js.map