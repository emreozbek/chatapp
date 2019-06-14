import {NgModule} from '@angular/core';
import {SettingListComponent} from './setting-list/setting-list.component';
import {CoreModule} from "../core/modules/core.module";

@NgModule({
  declarations: [SettingListComponent],
  exports: [SettingListComponent],
  imports: [
    CoreModule
  ]
})
export class SettingModule {
}
