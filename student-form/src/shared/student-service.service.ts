import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Student } from 'src/app/model/student';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private afs:AngularFirestore) { }

  addStudent(student:Student){
  student._id=this.afs.createId();
  return this.afs.collection('/students').add(student);
  
  
  }
  getStudents(){
    return this.afs.collection('/students').snapshotChanges();
  }
  createId(){
    return this.afs.createId();
  }
}
