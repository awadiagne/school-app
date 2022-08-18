import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AClass } from '../../interfaces/aClass';
import { ClassService } from '../../services/class-service.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
 
export class ClassComponent implements OnInit {

  id = "";
  name = "";
  size = 0;
  classesList : AClass [] = [];
  oneClass : AClass;

  constructor(private classService : ClassService, private router: Router) { }

  ngOnInit(): void {
    this.getClasses();
  }
    
  getClass() {
    //this.oneClass = this.classService.getClass(this.id);
    this.classService.getClass(this.id).subscribe((result : AClass) => {
      console.log(result);
      if(result.hasOwnProperty('error')){
        console.log('No class found');
      } else {
        console.log('Class retrieved : ' + result.name)
        this.oneClass = result;
      }
  });
  }

  getClasses() : void {
    this.classService.getClasses()
      .subscribe(classes => this.classesList = classes);
  }

  /*deleteClass(id : any) {
    this.classService.deleteClass(id)
      .subscribe();
  }*/
  
  addClass() {
    if(this.name.length > 0 && this.size > 0) {
      this.classService.createClass({ name: this.name, size: this.size })
        .subscribe(oneClass => this.oneClass = oneClass);
    }
    setTimeout(() => {
      this.router.navigate(['/classes']);
    }, 3000);
  }

  deleteClass(id: string) {
    if(confirm("Are you sure to delete ")) {
      this.classService.deleteClass(id).subscribe(result => {
        console.log(result);
        if(result.hasOwnProperty('error')){
          console.log('No class found');
        } else {
          console.log('Class deleted : ' + result)
        }
      });
    }
    setTimeout(() => {
      this.router.navigate(['/classes']);
    }, 3000);
  }
}
  