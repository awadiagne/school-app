import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
 
export class StudentComponent implements OnInit {

  id = 0;
  name = "";
  classId = 0;
  className = "";
  statusSelected = null;
  studentsList = [
    { id: 0, name: "Alassane", classId: 0 },
    { id: 1, name: "Abdou", classId: 1 },
    { id: 2, name: "Alpha", classId: 2 },
    { id: 3, name: "Assane", classId: 3 }
  ];
  classesList = [
    { id: 0, name: "Terminal S1", size: 27 },
    { id: 1, name: "Terminal S2", size: 48 },
    { id: 2, name: "Terminal L1a", size: 33 },
    { id: 3, name: "Terminal L2b", size: 42 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteClass(id : number) {
    const classIndex = this.studentsList.findIndex((studentParam) => studentParam.id === id);
    this.studentsList.splice(classIndex, 1);
  }
  
  addStudent() {
    const lastIndex = this.studentsList.length - 1;
    const id = this.studentsList[lastIndex].id + 1;
    this.studentsList.push({ id: id, name: this.name, classId: this.classId });
    this.name = "";
  }
  
  getStudent() {
    return this.studentsList.filter((studentParam) => studentParam.id === this.id);
  }

  getStudents() {
    return this.studentsList;
  }

  filterStudent() {
    if(this.statusSelected === null) {
      return this.studentsList;
    }
    return this.studentsList.filter((studentParam) => studentParam.id === this.id);
  }
  
  getClasses(){
    return this.classesList;
  }
}
  