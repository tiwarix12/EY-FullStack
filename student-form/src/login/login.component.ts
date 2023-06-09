import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{
  email: string = '';
  password: string = '';
  name:string='';
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email==undefined || this.password==undefined){
      alert('Please enter email and password');
    }
    else{
      this.auth.login(this.email, this.password);
      this.email='';
      this.password='';
    }
  }
    SignInWithGoogle(){
      this.auth.SignInWithGoogle();
    }

}

