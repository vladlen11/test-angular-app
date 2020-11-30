import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RecoveryComponent} from './recovery/recovery.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthRoutingModule} from './auth-routing.module';
import {ThemeModule} from '../../theme/theme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RecoveryComponent,
        RegistrationComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ThemeModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        RouterModule,
    ],


})
export class AuthModule {
}
