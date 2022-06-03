import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student = { id: 0, name: "", classId: 0, className: ""};
  public id = this.student.id;
  public name = this.student.name;
  public classId = this.student.classId;
  public className = this.student.className;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = parseInt(routeParams.get('id'));
    this.student = this.studentsList.find(x => x.id == this.id);
    this.name = this.student.name;
    this.classId = this.student.classId;
    this.className = this.student.className;
  }

 
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

  constructor(private route : ActivatedRoute, private router: Router) { }

  deleteStudent(id : number) {
    const classIndex = this.studentsList.findIndex((studentParam) => studentParam.id === id);
    this.studentsList.splice(classIndex, 1);
  }

  editStudent() {
    const classIndex = this.studentsList.findIndex((studentParam) => studentParam.id === this.id);
    this.studentsList.splice(classIndex, 1);
    this.studentsList.push({ id: this.id, name: this.name, classId: this.classId, className :this.className });
    console.log("Name " + this.name);
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