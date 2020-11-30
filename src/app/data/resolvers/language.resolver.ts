// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
// import { catchError, map } from 'rxjs/operators';
// import { Observable, of } from 'rxjs';
// import { LangService } from '../../core/services/lang.service';
// import { LanguageService } from '../services/language.service';
// import { LanguageModel } from '../models/language.models';
//
// @Injectable({
//     providedIn: 'root',
// })
// export class LanguageListResolver implements Resolve<LanguageModel[]> {
//     constructor(protected router: Router, private languageService: LanguageService, private langService: LangService) {
//     }
//
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LanguageModel[]> | LanguageModel[] {
//         return this.languageService.getLanguageList().pipe(
//             map((languageList) => {
//                 this.langService.detectLang();
//                 return languageList;
//             }),
//             catchError(error => {
//                 this.router.navigateByUrl('/404', {skipLocationChange: true}).then();
//                 return of([]);
//             })
//         ) as Observable<LanguageModel[]>;
//     }
// }
