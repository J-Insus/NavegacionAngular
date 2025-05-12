import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { CamiloComponent } from "./components/camilo/camilo.component";


const APP_ROUTES:Routes=[
{path: 'home', component: HomeComponent },
{path: 'camilo', component: CamiloComponent },

{path: '**', pathMatch: 'full',redirectTo:'home'},
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);  