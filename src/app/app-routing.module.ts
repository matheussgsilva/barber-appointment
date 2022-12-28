import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  { path:'', component: LayoutComponent, children:[
    { path:'', component: LandingPageComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
