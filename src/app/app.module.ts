import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';
import { PhotoModule } from './photo/photo.module';
import { AngularFireModule } from 'angularfire2';
import { PanelModule } from './panel/panel.module';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { Configs } from './configs'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(Configs.firebaseConfig),
    PhotoModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]  
})
export class AppModule { }
