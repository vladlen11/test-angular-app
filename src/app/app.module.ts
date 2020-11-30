import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { Observable } from 'rxjs/Observable';
// import { ConverterComponent } from './converter/converter.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {ThemeModule} from './theme/theme.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {BlogService} from './core/services/blog.service';
import {PaywayService} from './core/services/payway.service';
import {LangService} from './core/services/lang.service';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ChatService} from './core/services/chat.service';
import {AuthService} from './core/services/auth.service';
// import {InMemoryDataService} from './core/services/in-memory-data.service';
// import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSliderModule,
        ThemeModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient],
            }
        })
    ],
    bootstrap: [
        AppComponent,

    ],
    providers: [
        BlogService,
        PaywayService,
        LangService,
        ChatService,
        AuthService
    ]
})
export class AppModule {
}
