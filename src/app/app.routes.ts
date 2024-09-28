import { Routes } from '@angular/router';
import { LoggOutComponent } from './logg-out/logg-out.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';

// for ... if (pathname === currentPath) => route
// else next

export const routes: Routes = [
    {
        path: 'first-component',
        component: LoggOutComponent,
        children: [
            {
                path: 'next/:id',
                component: LoggOutComponent
            }
        ]
    },
    {
        path: 'second-component',
        component: LoggOutComponent,
        children: [
            {
                path: 'first-component/next/:id',
                component: LoggOutComponent
            }
        ]
    },
    {
        path: '**', // any
        component: ErrorHandlerComponent
    },
];
 