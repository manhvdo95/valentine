import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CelebrateComponent } from './celebrate/celebrate.component';
import { RejectionComponent } from './rejection/rejection.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'celebrate', component: CelebrateComponent},
  { path: 'rejection', component: RejectionComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
