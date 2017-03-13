import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CommunityPage } from '../pages/community/community';
import { EinstellungenPage } from '../pages/einstellungen/einstellungen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NachrichtenPage } from '../pages/nachrichten/nachrichten';
import { SpotsPage } from '../pages/spots/spots';
import { StaedtePage } from '../pages/staedte/staedte';
import { UeberPage } from '../pages/ueber/ueber';
import { WissenPage } from '../pages/wissen/wissen';
import { AuthService } from '../providers/auth-service'

@NgModule({
  declarations: [
    MyApp,
    CommunityPage,
    EinstellungenPage,
    LoginPage,
    RegisterPage,
    NachrichtenPage,
    SpotsPage,
    StaedtePage,
    UeberPage,
    WissenPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CommunityPage,
    EinstellungenPage,
    LoginPage,
    RegisterPage,
    NachrichtenPage,
    SpotsPage,
    StaedtePage,
    UeberPage,
    WissenPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}
