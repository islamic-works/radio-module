import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { RadioComponent } from './radio.component';
import { RadioRoutingModule } from './radio-routing.module';

@NgModule({
  declarations: [RadioComponent],
  imports: [
    NativeScriptCommonModule, RadioRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RadioModule { }
