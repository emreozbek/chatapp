import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ChatTabComponent} from "../chat-tab/chat-tab/chat-tab.component";
import {CustomFunctionComponent} from "../custom-function/custom-function/custom-function.component";

const appRoutes: Routes = [
  {path: '', component: ChatTabComponent},
  {path: 'chatapp', component: ChatTabComponent},
  {path: 'custom-function', component: CustomFunctionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
