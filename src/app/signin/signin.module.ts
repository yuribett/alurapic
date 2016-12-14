import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninService } from './signin.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ SigninService ]
})
export class SigninModule { }
