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

  studentsList = [
    { id: 0, name: "Alassane", classId : 0, className: "Terminal S1" },
    { id: 1, name: "Abdou", classId : 1, className:"Terminal S2" },
    { id: 2, name: "Alpha", classId : 2, className: "Terminal L1a" },
    { id: 3, name: "Assane", classId : 3, className: "Terminal L1b" }
  ];
  classesList = [
    { id: 0, name: "Terminal S1", size: 27 },
    { id: 1, name: "Terminal S2", size: 48 },
    { id: 2, name: "Terminal L1a", size: 33 },
    { id: 3, name: "Terminal L2b", size: 42 }
  ];
  className = this.classesList[this.id].name;

  constructor() { }

  ngOnInit(): void {
  }

  deleteStudent(id : number) {
    const classIndex = this.studentsList.findIndex((studentParam) => studentParam.id === id);
    this.studentsList.splice(classIndex, 1);
  }

  editStudent(id : number) {
    const classIndex = this.studentsList.findIndex((studentParam) => studentParam.id === id);
    this.studentsList.splice(classIndex, 1);
    this.studentsList.push({ id: id, name: this.name, classId: this.classId, className :this.className });
  }
  
  addStudent() {
    const lastIndex = this.studentsList.length - 1;
    const id = this.studentsList[lastIndex].id + 1;
    this.studentsList.push({ id: id, name: this.name, classId: this.classId, className :this.className });
    this.name = "";
  }
  
  getStudent() {
    return this.studentsList.filter((studentParam) => studentParam.id === this.id);
  }

  getStudents() {
    return this.studentsList;
  }
  
  getClasses(){
    return this.classesList;
  }

  getClass() {
    return this.classesList.filter((classParam) => classParam.id === this.classId);
  }
}
  