import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { BootstrapModule } from '../../bootstrap.module';

import {
    PanelCardComponent,
    ServicesComponent,
    EmptyListComponent
} from '.';

export const components = [
    PanelCardComponent,
    ServicesComponent,
    EmptyListComponent
]

@NgModule({
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MaterialModule,
        BootstrapModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PanelComponentModule { }