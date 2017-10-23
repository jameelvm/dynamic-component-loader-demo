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
var core_1 = require("@angular/core");
var DynamicComponentHost_Directive_1 = require("./DynamicComponentHost.Directive");
var DynamicComponent_Service_1 = require("./DynamicComponent.Service");
var ContainerComponent = (function () {
    function ContainerComponent(_componentFactoryResolver, dynamicComponentService) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this.dynamicComponentService = dynamicComponentService;
    }
    ContainerComponent.prototype.ngOnInit = function () {
        this.renderComponents();
    };
    ContainerComponent.prototype.ngAfterViewInit = function () {
    };
    ContainerComponent.prototype.renderComponents = function () {
        var component = this.dynamicComponentService.getComponent(this.tile.componentName);
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
        var viewContainerRef = this.widgetHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.tile;
    };
    return ContainerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "tile", void 0);
__decorate([
    core_1.ViewChild(DynamicComponentHost_Directive_1.DynamicComponentHostDirective),
    __metadata("design:type", DynamicComponentHost_Directive_1.DynamicComponentHostDirective)
], ContainerComponent.prototype, "widgetHost", void 0);
ContainerComponent = __decorate([
    core_1.Component({
        selector: 'container',
        templateUrl: 'app/container/ContainerComponent.Template.html'
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, DynamicComponent_Service_1.DynamicComponentService])
], ContainerComponent);
exports.ContainerComponent = ContainerComponent;
//# sourceMappingURL=Container.Component.js.map