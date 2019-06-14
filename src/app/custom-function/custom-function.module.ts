import {NgModule} from '@angular/core';
import {CustomFunctionComponent} from './custom-function/custom-function.component';
import {CoreModule} from "../core/modules/core.module";
import {CustomFunctionService} from "./custom-function.service";

@NgModule({
  declarations: [CustomFunctionComponent],
  exports: [CustomFunctionComponent],
  imports: [
    CoreModule
  ],
  providers: [CustomFunctionService]
})
export class CustomFunctionModule {
}
