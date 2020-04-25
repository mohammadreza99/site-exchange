import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material.module';
import { BootstrapModule } from '../../bootstrap.module';
import { PanelComponentModule } from '../component';
import { ComponentModule } from '../../main/component';

import {
    PanelMain,
    DashboardPage,
    ProfilePage,
    OrdersListPage,
    NewOrderPage,
    TransactionsListPage,
    AddFundsPage,
    TicketsListPage,
    NewTicketPage,
    ServicesPage
} from '.';

export const components = [
    PanelMain,
    DashboardPage,
    ProfilePage,
    OrdersListPage,
    NewOrderPage,
    TransactionsListPage,
    AddFundsPage,
    TicketsListPage,
    NewTicketPage,ServicesPage
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
        RouterModule,
        PanelComponentModule,
        BrowserAnimationsModule,
        ComponentModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PanelPageModule { }