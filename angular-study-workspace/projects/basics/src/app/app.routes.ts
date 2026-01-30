import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('../home/home').then((m) => m.Home)
        }
    },
    {
        path: 'parent-child-communication',
        loadComponent: () => {
            return import('../parent/parent').then((m) => m.ParentChildComm)
        }
    },
    {
        path: 'api-calling',
        loadComponent: () => {
            return import('../api-call/api-call').then((m) => m.ApiCall)
        }
    }

];
