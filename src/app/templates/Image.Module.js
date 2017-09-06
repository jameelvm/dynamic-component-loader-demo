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
var ImageTextWidget_Component_1 = require("./ImageTextWidget.Component");
var IconWidget_Component_1 = require("./IconWidget.Component");
var forms_1 = require("@angular/forms");
var ImageWidgetModule = (function () {
    function ImageWidgetModule() {
    }
    return ImageWidgetModule;
}());
ImageWidgetModule = __decorate([
    core_1.NgModule({
        declarations: [
            ImageTextWidget_Component_1.ImageTextWidgetComponent,
            IconWidget_Component_1.IconWidgetComponent
        ],
        imports: [
            common_1.CommonModule, forms_1.FormsModule
        ],
        exports: [ImageTextWidget_Component_1.ImageTextWidgetComponent, IconWidget_Component_1.IconWidgetComponent],
        providers: []
    })
], ImageWidgetModule);
exports.ImageWidgetModule = ImageWidgetModule;
//# sourceMappingURL=Image.Module.js.map