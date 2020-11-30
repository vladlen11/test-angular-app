import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {RecoveryComponent} from './recovery/recovery.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        data: {
            slug: 'auth'
        },
        children: [
            {
                path: '',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegistrationComponent,
            },
            {
                path: 'recovery',
                component: RecoveryComponent,

            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class AuthRoutingModule {
}
