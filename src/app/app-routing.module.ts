import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'formulario', component: ContactComponent},
  {path:'curriculum', component: CurriculumComponent},
  {path:'**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
