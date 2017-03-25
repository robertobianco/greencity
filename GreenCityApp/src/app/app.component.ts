import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { CommunityPage } from '../pages/community/community';
import { EinstellungenPage } from '../pages/einstellungen/einstellungen';
import { LoginPage } from '../pages/login/login';
import { NachrichtenPage } from '../pages/nachrichten/nachrichten';
import { SpotsJSPage } from '../pages/spots-js/spots-js';
import { StaedtePage } from '../pages/staedte/staedte';
import { UeberPage } from '../pages/ueber/ueber';
import { WissenPage } from '../pages/wissen/wissen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Spots', component: SpotsJSPage },
      { title: 'Wissen', component: WissenPage },
      { title: 'Community', component: CommunityPage },
      { title: 'Nachrichten', component: NachrichtenPage },
      { title: 'Einstellungen', component: EinstellungenPage },
      { title: 'Stadt ändern', component: StaedtePage },
      { title: 'Über', component: UeberPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
