import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourDynamicComponent } from "./YourDynamic.Component";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    YourDynamicComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [YourDynamicComponent],
  providers: []
})
export class YourDynamicModule {

}
