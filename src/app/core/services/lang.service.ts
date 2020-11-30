import { EventEmitter, Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocalStorageService} from './local-storage.service';
import {LanguageModel} from '../models/language.models';

@Injectable({
    providedIn: 'root'
})

export class LangService {

    lang: string;
    langDefault: string;
    langChanged = new EventEmitter();

    langList = [
        {
            id: 0,
            code: 'ru',
            name: 'Русский'
        },
        {
            id: 1,
            code: 'en',
            name: 'English'
        }
    ];


    constructor(
        public  translate: TranslateService,
        private localStorage: LocalStorageService,
    ) {
        this.translate.setDefaultLang('ru');
        this.translate.use('ru');

        this.langDefault = this.translate.getDefaultLang();
        this.lang = this.langDefault;

        this.detectLang();
    }

    detectLang() {

        const langCode: string = !!this.localStorage.getItem('lang')
            ? this.localStorage.getItem('lang')
            : window.navigator.language.slice(0, 2);

        const currentLang: LanguageModel = this.langList.find((item) => item.code === langCode);

        const lang = currentLang ? currentLang.code : this.langDefault;
        this.setLang(lang);
    }

    setLang(lang: string) {
        this.lang = lang;
        this.translate.use(lang);
        this.localStorage.setItem('lang', this.lang);

        this.langChanged.emit(this.lang);
        // console.log('setLang function', this.translate.getDefaultLang());
    }
}
