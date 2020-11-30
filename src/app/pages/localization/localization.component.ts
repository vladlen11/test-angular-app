import {Component, OnInit} from '@angular/core';
import {LangService} from '../../core/services/lang.service';
import {LanguageModel} from '../../core/models/language.models';

@Component({
    selector: 'app-localization',
    templateUrl: './localization.component.html',
    styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent implements OnInit {

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

    currentLang: LanguageModel;

    constructor(
        private langService: LangService,
    ) {
        this.currentLang = this.langList.find(itm => itm.code === this.langService.lang);
        this.langService.langChanged.subscribe((lang) => {
            this.currentLang = this.langList.find(itm => itm.code === this.langService.lang);
        });
    }

    ngOnInit() {
    }


    setLang(code) {
        this.langService.setLang(code);
    }

}
