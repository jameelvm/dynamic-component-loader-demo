import { Injectable }           from '@angular/core';
import { YourDynamicComponent } from '../templates/YourDynamic.Component';
@Injectable()
//register your component
export class DynamicComponentService  {
  getComponent(componentName:string) {
          if(componentName==="YourDynamicComponent"){
              return YourDynamicComponent
          }
          else if(componentName==="OtherComponent"){
            return null
        }
  }
}
