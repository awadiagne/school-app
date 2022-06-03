import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {

  id = 0;
  name = "";
  size = 0;
  statusSelected: any = null;
  class = { id: 0, name: "", size: 0};

  classesList = [
      { id: 0, name: "Terminal S1", size: 27 },
      { id: 1, name: "Terminal S2", size: 48 },
      { id: 2, name: "Terminal L1a", size: 33 },
      { id: 3, name: "Terminal L2b", size: 42 }
  ];

  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = parseInt(routeParams.get('id'));
    this.class = this.classesList.find(x => x.id == this.id);
    this.name = this.class.name;
    this.size = this.class.size;
  }

  deleteClass(id : number) {
    const classIndex = this.classesList.findIndex((classParam) => classParam.id === id);
    this.classesList.splice(classIndex, 1);
  }

  editClass() {
    const classIndex = this.classesList.findIndex((classParam) => classParam.id === this.id);
    this.classesList.splice(classIndex, 1);
    this.classesList.push({ id: this.id, name: this.name, size: this.size });
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
