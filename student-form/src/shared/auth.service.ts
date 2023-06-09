import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {GoogleAuthProvider} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router:Router) { }

  login(email:string, password:string){
    this.fireauth.signInWithEmailAndPassword(email, password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard']);
    }).catch(error=>{
      alert(error.message);
      this.router.navigate(['/login']);
    })
  }
  register(email:string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(()=>{
      alert('Registered successfully');
      this.router.navigate(['/login']);
    }).catch(error=>{
      alert(error.message);
      this.router.navigate(['/register']);
    })
  }
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },error=>{
      alert(error.message);
    }
    )
  }
  SignInWithGoogle(){
    this.fireauth.signInWithPopup(new GoogleAuthProvider()).then((res)=>{
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
      this.router.navigate(['/dashboard']);
    }).catch(error=>{
      alert(error.message);
      this.router.navigate(['/login']);
    })
  }
  onAuthStateChanged(){
    return this.fireauth.onAuthStateChanged;
  }
  getUser(): Observable<firebase.default.User | null> {
    return this.fireauth.authState;
  }
  isloggedIn(){
    return localStorage.getItem('token');
  }
  
  
}
