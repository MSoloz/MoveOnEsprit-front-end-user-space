import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './navbar/components/contacts/contacts.component';
import { HomeComponent } from './navbar/components/home/home.component';
import { UniversitiesComponent } from './navbar/components/universities/universities.component';
import { UniversityDetailsComponent } from './navbar/components/university-details/university-details.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

 {path: '', component:LoginComponent},
 {path: 'MoveOnEsprit', component:NavbarComponent,children: [
  {  path:'home', component:HomeComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'home', component:HomeComponent},
  {path:'home/details/:id', component:UniversityDetailsComponent},
  {path:'universities', component:UniversitiesComponent},
 
]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
