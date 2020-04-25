import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { BootstrapModule } from '../../bootstrap.module';

import {
    CardComponent,
    ServiceDetailsComponent,
    GiftcardItemComponent,
    WarningsComponent,
    GiftcardBuyPanelComponent,
    FileInputComponent,
    FooterAreaComponent,
    SefaratBuyPanelComponent,
    AgmComponent,
    PageHeaderComponent,
    FaqComponent,
    AddressComponent,
    OrderTitleComponent,
    InvoiceComponent
} from '.';

export const components = [
    CardComponent,
    ServiceDetailsComponent,
    GiftcardItemComponent,
    WarningsComponent,
    GiftcardBuyPanelComponent,
    FileInputComponent,
    FooterAreaComponent,
    SefaratBuyPanelComponent,
    AgmComponent,
    PageHeaderComponent,
    FaqComponent,
    AddressComponent,
    OrderTitleComponent,
    InvoiceComponent
]

@NgModule({
    declarations: [
        ...components,
        OrderTitleComponent,
        InvoiceComponent
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

export class ComponentModule { }