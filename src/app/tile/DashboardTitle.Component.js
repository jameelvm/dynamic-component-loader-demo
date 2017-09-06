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
var DashbardWidgetHost_Directive_1 = require("./DashbardWidgetHost.Directive");
var WidgetComponent_Service_1 = require("./WidgetComponent.Service");
var DashboardTileComponent = (function () {
    function DashboardTileComponent(_componentFactoryResolver, widgetComponentService) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this.widgetComponentService = widgetComponentService;
    }
    DashboardTileComponent.prototype.ngOnInit = function () {
        this.renderComponents();
    };
    DashboardTileComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardTileComponent.prototype.renderComponents = function () {
        var component = this.widgetComponentService.getComponent(this.tile.componentName);
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
        var viewContainerRef = this.widgetHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.tile;
    };
    return DashboardTileComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DashboardTileComponent.prototype, "tile", void 0);
__decorate([
    core_1.ViewChild(DashbardWidgetHost_Directive_1.DashboardTileWidgetHostDirective),
    __metadata("design:type", DashbardWidgetHost_Directive_1.DashboardTileWidgetHostDirective)
], DashboardTileComponent.prototype, "widgetHost", void 0);
DashboardTileComponent = __decorate([
    core_1.Component({
        selector: 'dashboard-tile',
        templateUrl: 'app/tile/DashboardTile.Template.html'
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, WidgetComponent_Service_1.WidgetComponentService])
], DashboardTileComponent);
exports.DashboardTileComponent = DashboardTileComponent;
//# sourceMappingURL=DashboardTitle.Component.js.map