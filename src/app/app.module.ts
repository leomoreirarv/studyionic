import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { DetailsPage } from '../pages/details/details';
import { JobsPage } from '../pages/jobs/jobs';
import { LoginPage } from '../pages/login/login';
import { LogoutComponent } from '../components/logout/logout';
import { CreateJobPage } from '../pages/create-job/create-job';
import { CameraStudyComponent } from '../components/camera-study/camera-study';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    DetailsPage,
    JobsPage,
    LoginPage,
    LogoutComponent,
    CreateJobPage,
    CameraStudyComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    DetailsPage,
    JobsPage,
    LoginPage,
    LogoutComponent,
    CreateJobPage,
    CameraStudyComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
