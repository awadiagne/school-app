import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './classes/classe/class.component';
import { StudentComponent } from './students/student/student.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { ClassDetailsComponent } from './classes/class-details/class-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './notification/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    StudentComponent,
    StudentDetailsComponent,
    ClassDetailsComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
