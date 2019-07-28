import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { RadioComponent } from './radio.component';
import { RadioRoutingModule } from './radio-routing.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
    declarations: [RadioComponent],
    imports: [
        NativeScriptCommonModule, RadioRoutingModule, MenuModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class RadioModule { }
