import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamiccomponent-host]',
})
export class DynamicComponentHostDirective  {
  constructor(public viewContainerRef: ViewContainerRef) { 

      
  }
}