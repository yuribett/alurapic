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
import { RegisterComponent } from './register/register.component';
import { GridComponent } from './grid/grid.component';
//import { Config } from './config'; 

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(Configs.firebaseConfig),
    PhotoModule,
    PanelModule,
    routing
  ],
  providers: [],
  bootstrap: [ AppComponent ]  
})
export class AppModule { }
