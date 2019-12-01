import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaviFormsComponent } from './comps/navi-forms/navi-forms.component';
import { FormAndSheepComponent } from './comps/form-and-sheep/form-and-sheep.component';
import { FormGroupComponent } from './comps/form-group/form-group.component';
const routes: Routes = [
  {path:'forms',component:NaviFormsComponent,
children:[
  {path:'', redirectTo:'simple',pathMatch:'full'},
  {path:'simple',component:FormAndSheepComponent},
  {path:'group',component:FormGroupComponent}
]}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
