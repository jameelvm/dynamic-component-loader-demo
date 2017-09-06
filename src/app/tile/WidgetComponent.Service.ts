import { Injectable }           from '@angular/core';
import { ImageTextWidgetComponent } from "../templates/ImageTextWidget.Component";
import { IconWidgetComponent } from "../templates/IconWidget.Component";


@Injectable()
//register your component
export class WidgetComponentService {
  getComponent(componentName:string) {
          if(componentName==="ImageTextWidgetComponent"){
              return ImageTextWidgetComponent
          }
          else if(componentName==="IconWidgetComponent"){
            return IconWidgetComponent
        }
  }
}
