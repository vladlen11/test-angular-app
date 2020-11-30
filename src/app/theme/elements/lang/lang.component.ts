import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LangService} from '../../../core/services/lang.service';
import {LanguageModel} from '../../../core/models/language.models';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
    selector: 'app-lang',
    templateUrl: './lang.component.html',
    styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {

    currentLang: LanguageModel;

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
        private langService: LangService,
    ) {
        this.currentLang = this.langList.find(itm => itm.code === this.langService.lang);
        this.langService.langChanged.subscribe((lang) => {
            this.currentLang = this.langList.find(itm => itm.code === this.langService.lang);
        });
    }

    ngOnInit(
        // this.langService.


    ) {

    }

    setLang() {
        this.langService.setLang(this.currentLang.code);
    }


}
