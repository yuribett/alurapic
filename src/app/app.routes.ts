import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    {path: '', component: GridComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: GridComponent}
];

export const routing = RouterModule.forRoot(appRoutes);