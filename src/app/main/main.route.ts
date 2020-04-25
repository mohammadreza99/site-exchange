import { Routes } from '@angular/router';

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
} from './page';

export const mainRoute: Routes = [
    {
        path: '',
        component: Main,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomePage,
                data: {
                    title: 'صفحه اصلی'
                }
            },
            {
                path: 'registration',
                component: RegistrationPage,
                data: {
                    title: 'ثبت نام / ورود به سایت'
                }
            },
            {
                path: 'about-us',
                component: AboutUsPage,
                data: {
                    title: 'درباره ما'
                }
            },
            {
                path: 'contact-us',
                component: ContactUsPage,
                data: {
                    title: 'تماس با ما'
                }
            },
            {
                path: 'faq',
                component: FaqPage,
                data: {
                    title: 'سوالات متداول'
                }
            },
            {
                path: 'new-order',
                component: NewOrderPage,
                data: {
                    title: 'سفارش'
                }
            },
            {
                path: 'service-details',
                component: ServiceDetailsPage,
                data: {
                    title: 'جزییات سرویس'
                }
            },
            {
                path: 'giftcards',
                component: GiftcardsDetailsPage,
                data: {
                    title: 'گیفت کارت ها'
                }
            },
            {
                path: 'terms-conditions',
                component: TermsConditionsPage,
                data: {
                    title: 'قوانین و شرایط'
                }
            },
            {
                path: '**',
                redirectTo: 'not-found',
                pathMatch: 'full'
            },
            {
                path: 'not-found',
                component: NotFoundPage,
                data: {
                    title: 'صفحه یافت نشد...'
                }
            }
        ]

    }
]