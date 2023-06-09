import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';
import { FormBuilder,ReactiveFormsModule, Validators,FormGroup, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { StudentServiceService } from 'src/shared/student-service.service';
import { Student } from 'src/app/model/student';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit {
countries: string []=['UK','USA','India','France'];
  constructor(private auth: AuthService,private fb:FormBuilder,private data:StudentServiceService, private router:Router ) { }
  studentsList: Student[] = [];
  form =this.fb.group( {
    name: ['', Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)],
    age: ['', Validators.required, ageRangeValidator(12, 25), Validators.min(12), Validators.max(25)] ,
    dateOfBirth: ['', Validators.required],
    country: ['', Validators.required],
    cgpa: ['', Validators.required,cgpaValidator(0,10)],
  });
  student:Student|null=null;

  

  ngOnInit(): void {

    this.auth.getUser().subscribe(user => {
      if (user && user.displayName) {
        const nameParts = user.displayName.split(' ');
        this.form.patchValue({
          name: user.displayName,
        });
      } else {
        this.form.patchValue({
          name: '',
        });
      }
    });
    
  }
addStudent() {
  const newStudent: Student = {
    _id: uuidv4(),
    name: this.form.value.name,
    age: parseInt(this.form.value.age),
    dateOfBirth: this.form.value.dateOfBirth,
    country: this.form.value.country,
    cgpa: parseInt(this.form.value.cgpa),
  };
  this.data.addStudent(newStudent);
  alert('Student added successfully');
}
  resetForm(){
    this.form.reset();
  }

  logout() {
    this.auth.logout();
  }

}
function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
// age async validator
function ageRangeValidator(min: number, max: number): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const value = control.value as number;

    if (value !== undefined && (isNaN(value) || value < min || value > max)) {
      return new Observable(observer => observer.next({ ageRange: true }));
    } else {
      return new Observable(observer => observer.next(null));
    }
  };
}
function cgpaValidator(min: number, max: number): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const value = control.value as number;

    if (value !== undefined && (isNaN(value) || value < min || value > max)) {
      return new Observable(observer => observer.next({ cgpaRange: true }));
    } else {
      return new Observable(observer => observer.next(null));
    }
  };
}
