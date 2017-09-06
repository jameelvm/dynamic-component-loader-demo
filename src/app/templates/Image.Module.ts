import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageTextWidgetComponent } from "./ImageTextWidget.Component";
import { IconWidgetComponent } from "./IconWidget.Component";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ImageTextWidgetComponent,
    IconWidgetComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [ImageTextWidgetComponent,IconWidgetComponent],
  providers: []
})
export class ImageWidgetModule {

}
