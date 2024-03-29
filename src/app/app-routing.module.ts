import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassDetailsComponent } from './classes/class-details/class-details.component';
import { ClassComponent } from './classes/classe/class.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentComponent } from './students/student/student.component';

const routes: Routes = [
  {
    path : "classes",
    component : ClassComponent
  },
  {
    path : "classDetails/:id",
    component : ClassDetailsComponent
  },
  {
    path : "students",
    component : StudentComponent
  },
  {
    path : "studentDetails/:id",
    component : StudentDetailsComponent
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
