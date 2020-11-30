import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './blocks/header/header.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { LangComponent } from './elements/lang/lang.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        HeaderComponent,
        LangComponent,
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        RouterModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    exports: [
        HeaderComponent,
        LangComponent,
    ],
})
export class ThemeModule {
}
