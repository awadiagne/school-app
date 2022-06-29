import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AClass } from '../interfaces/aClass';
import { ClassService } from '../services/class-service.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {

  id = 0;
  name = "";
  size = 0;
  oneClass : AClass;

  constructor(private classService : ClassService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = parseInt(routeParams.get('id'));
    this.getClass();
  }

  editClass() {
    return this.classService.updateClass(this.oneClass)
      .subscribe();
  }
  
  getClass() {
    return this.classService.getClass(this.id)
      .subscribe(oneClass => {
        this.name = oneClass.name; 
        this.size = oneClass.size;
        this.oneClass.name = oneClass.name;
        this.oneClass.size = oneClass.size;
        this.oneClass.id = oneClass.id;
      });
  }

}
