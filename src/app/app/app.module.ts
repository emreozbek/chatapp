import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import {CoreModule} from "../core/modules/core.module";
import {ChatTabModule} from "../chat-tab/chat-tab.module";
import {UserModule} from "../user/user.module";
import {SettingModule} from "../setting/setting.module";
import {CustomFunctionModule} from "../custom-function/custom-function.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    ChatTabModule,
    UserModule,
    SettingModule,
    CustomFunctionModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
