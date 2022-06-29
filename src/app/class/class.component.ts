import { Component, OnInit } from '@angular/core';
import { AClass } from '../interfaces/aClass';
import { ClassService } from '../services/class-service.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
 
export class ClassComponent implements OnInit {

  id = 0;
  name = "";
  size = 0;
  classesList : AClass [] = [];
  oneClass : AClass;

  constructor(private classService : ClassService) { }

  ngOnInit(): void {
    this.getClasses();
  }
    
  getClass() {
    return this.classService.getClass(this.id)
      .subscribe(oneClass => this.oneClass = oneClass);
  }

  getClasses() : void {
    this.classService.getClasses()
      .subscribe(classes => this.classesList = classes);
  }

  deleteClass(id : any) {
    this.classService.deleteClass(id)
      .subscribe();
  }
  
  addClass() {
    if(this.name.length > 0 && this.size > 0) {
      this.classService.createClass({ id: this.classesList.length, name: this.name, size: this.size })
        .subscribe(oneClass => this.oneClass = oneClass);
    }
  }

}
  