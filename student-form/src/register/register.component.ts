import { Component } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private auth:AuthService ) { }
  register(){
    if(this.email==undefined || this.password==undefined){
      alert('Please enter email and password');
    }
    else{
      this.auth.register(this.email, this.password);
      this.email='';
      this.password='';
    }
  }

}
