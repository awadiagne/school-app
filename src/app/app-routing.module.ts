import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path : "classes",
    component : ClassComponent
  },
  {
    path : "students",
    component : StudentComponent
  },
  {
    path : "",
    redirectTo : "classes",
    pathMatch : "full"
  },
  {
    path : "*",
    redirectTo : "classes"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
