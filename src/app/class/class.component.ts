import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
 
export class ClassComponent implements OnInit {

  id = 0;
  name = "Terminal";
  size = 0;
  statusSelected: any = null;
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
    const classIndex = this.classesList.findIndex((classParam) => classParam.id === id);
    this.classesList.splice(classIndex, 1);
  }

  editClass(id : number) {
    const classIndex = this.classesList.findIndex((classParam) => classParam.id === id);
    this.classesList.splice(classIndex, 1);
    this.classesList.push({ id: id, name: this.name, size: this.size });
  }
  
  addClass() {
    const lastIndex = this.classesList.length - 1;
    const id = this.classesList[lastIndex].id + 1;
    this.classesList.push({ id: id, name: this.name, size: this.size });
    this.name = "";
  }
  
  getClass() {
    return this.classesList.filter((classParam) => classParam.id === this.id);
  }

  getClasses() {
    return this.classesList;
  }

  filterClass() {
    if(this.statusSelected === null) {
      return this.classesList;
    }
    return this.classesList.filter((classParam) => this.id === classParam.id);
  } 
}
  