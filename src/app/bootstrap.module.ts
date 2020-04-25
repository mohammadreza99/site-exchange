import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
    imports: [
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        CollapseModule.forRoot(),
        BsDropdownModule.forRoot(),
        BrowserModule,
        FormsModule
    ],
    exports: [
        TooltipModule,
        ModalModule,
        CollapseModule,
        BsDropdownModule,
        BrowserModule,
        FormsModule
    ],
})
export class BootstrapModule { }