import { Routes } from '@angular/router';
import { LoggOutComponent } from './logg-out/logg-out.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { AppComponent } from './app.component';

// for ... if (pathname === currentPath) => route
// else next

export const routes: Routes = [
    {
        path: '/',
        component: AppComponent,
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
 