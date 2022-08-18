import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AClass } from '../../interfaces/aClass';
import { ClassService } from '../../services/class-service.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {

  id = "";
  name = "";
  size = 0;
  oneClass : AClass;

  constructor(private classService : ClassService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = routeParams.get('id');
    console.log('Id class : ' + this.id);

    this.classService.getClass(this.id).subscribe((result : AClass) => {
        console.log(result);
        if(result.hasOwnProperty('error')){
          console.log('No class found');
        } else {
          this.oneClass = result;
          this.name = this.oneClass.name;
          this.size = this.oneClass.size;
        }
        return result;
    });
  }

  editClass() {
    console.log('Size : ' + this.size);
    this.classService.updateClass({_id : this.id, size : this.size, name : this.name}).subscribe((result : AClass) => {
      console.log(result);
      if(result.hasOwnProperty('error')){
        console.log('No class found');
      } else {
        this.oneClass = result;
        this.name = this.oneClass.name;
        this.size = this.oneClass.size;

        setTimeout(() => {
          this.router.navigate(['/classes']);
        }, 3000);
      }
    });
  }
  
  getClass() {
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

}
