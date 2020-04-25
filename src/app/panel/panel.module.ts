import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { BootstrapModule } from '../bootstrap.module';

import { PanelPageModule } from './page/panel-page.module';
import { panelRoute } from './panel.route';


@NgModule({
    declarations: [

    ],
    exports: [

    ],
    imports: [
        CommonModule,
        BrowserModule,
        PanelPageModule,
        RouterModule,
        MaterialModule,
        BootstrapModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(panelRoute),
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PanelModule { }