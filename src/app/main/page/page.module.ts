import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NguCarouselModule } from '@ngu/carousel';

import { MaterialModule } from '../../material.module';
import { BootstrapModule } from '../../bootstrap.module';
import { ComponentModule } from '../component/component.module'

import {
    Main,
    HomePage,
    RegistrationPage,
    ContactUsPage,
    AboutUsPage,
    FaqPage,
    NewOrderPage,
    ServiceDetailsPage,
    GiftcardsDetailsPage,
    TermsConditionsPage,
    NotFoundPage
} from '.';

export const components = [
    Main,
    HomePage,
    RegistrationPage,
    ContactUsPage,
    AboutUsPage,
    FaqPage,
    NewOrderPage,
    ServiceDetailsPage,
    GiftcardsDetailsPage,
    TermsConditionsPage,
    NotFoundPage
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
        RouterModule,
        MaterialModule,
        BootstrapModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentModule,
        NguCarouselModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PageModule { }