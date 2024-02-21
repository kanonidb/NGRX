import {ApplicationConfig, Injectable} from '@angular/core'
import {
  RouterStateSnapshot,
  TitleStrategy,
  provideRouter,
} from '@angular/router'

import {routes} from './app.routes'
import {Title} from '@angular/platform-browser'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { tokenInterceptorInterceptor } from './globalfeed/interceptors/token-interceptor.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideState, provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import { counterReducer } from './states/counterstate/counter.reducer'
@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super()
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState)
    if (title !== undefined) {
      this.title.setTitle(`KANON | ${title}`)
    }
  }
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideAnimationsAsync(),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
     provideHttpClient(withInterceptors([tokenInterceptorInterceptor])), 
     provideAnimationsAsync(), provideStore(), provideEffects(),
     provideState({name: 'counter', reducer: counterReducer})
  ],
}
