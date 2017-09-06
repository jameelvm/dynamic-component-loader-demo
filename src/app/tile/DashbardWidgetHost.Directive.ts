import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[widget-host]',
})
export class DashboardTileWidgetHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { 

      
  }
}