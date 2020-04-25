import { Routes } from '@angular/router';

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
    ServicesPage,
} from './page';
import { NotFoundPage } from '../main/page';

export const panelRoute: Routes = [
    {
        path: 'panel',
        component: PanelMain,
        data:{
            title:'پنل'
        },
        children: [
            {
                path: '',
                component: DashboardPage
            },
            {
                path: 'orders-list',
                component: OrdersListPage,
                data: {
                    title: 'لیست سفارشات'
                }
            },
            {
                path: 'new-order',
                component: NewOrderPage,
                data: {
                    title: 'سفارش جدید'
                }
            },
            {
                path: 'services',
                component: ServicesPage,
                data: {
                    title: 'لیست خدمات'
                }
            },
            {
                path: 'profile',
                component: ProfilePage,
                data: {
                    title: 'پروفایل'
                }
            },
            {
                path: 'transactions-list',
                component: TransactionsListPage,
                data: {
                    title: 'لیست تراکنش ها'
                }
            },
            {
                path: 'add-funds',
                component: AddFundsPage,
                data: {
                    title: 'افزایش موجودی'
                }
            },
            {
                path: 'tickets-list',
                component: TicketsListPage,
                data: {
                    title: 'مشاهده تیکت ها'
                }
            },
            {
                path: 'new-ticket',
                component: NewTicketPage,
                data: {
                    title: 'تیکت جدید'
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
    },

]