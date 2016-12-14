import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
    {path: '', component: SigninComponent},
    {path: 'grid', component: GridComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'register/:id', component: RegisterComponent},
    {path: '**', component: SigninComponent}
];

export const routing = RouterModule.forRoot(appRoutes);