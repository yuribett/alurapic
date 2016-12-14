//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';
import { PhotoModule } from './photo/photo.module';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { PanelModule } from './panel/panel.module';
import { SigninModule } from './signin/signin.module';
import { MaterialModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { Configs } from './configs';
import { RegisterComponent } from './register/register.component';
import { GridComponent } from './grid/grid.component';
import { SigninComponent } from './signin/signin.component';

//Others
import { routing } from './app.routes';
import 'rxjs/add/operator/map';
import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    GridComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(Configs.firebaseConfig, Configs.authConfig),
    PhotoModule,
    PanelModule,
    SigninModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]  
})
export class AppModule { }
