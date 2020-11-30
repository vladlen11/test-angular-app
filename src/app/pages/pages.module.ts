import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../theme/theme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConverterComponent } from './converter/converter.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { LocalizationComponent } from './localization/localization.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ChatComponent } from './chat/chat.component';

import {SlickCarouselModule} from 'ngx-slick-carousel';

import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';



@NgModule({
    declarations: [
        PagesComponent,
        ConverterComponent,
        HomeComponent,
        MapComponent,
        ProfileComponent,
        VisualizationComponent,
        LocalizationComponent,
        GalleryComponent,
        ChatComponent,
    ],
    imports: [
        CommonModule,
        ThemeModule,
        PagesRoutingModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        SlickCarouselModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAbUXoJH_FOWQbInq_exAVjJacwbACqswA',
            libraries: ['places']
        }),
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        TranslateModule
    ]
})
export class PagesModule {
}
