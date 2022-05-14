import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { initializeApp } from '@firebase/app';
import { registerModel } from './register.model';
import { ApiService } from './shared/api.service';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formValue !: FormGroup;
  registerData !: any;
  registermodelobj: registerModel = new registerModel();


  constructor(private formbuilder: FormBuilder,
    private api: ApiService) {
    // Your web app's Firebase configuration
    // const firebaseConfig = {
    //   apiKey: "AIzaSyAZ1g2v2-YaGIP62A_hyESRx-SSDuPE7Sc",
    //   authDomain: "fir-loger-bd900.firebaseapp.com",
    //   projectId: "fir-loger-bd900",
    //   storageBucket: "fir-loger-bd900.appspot.com",
    //   messagingSenderId: "792303288054",
    //   appId: "1:792303288054:web:7a767b64edadcf9cedf6d7"
    // };

    // Initialize Firebase
    const app = initializeApp(environment);
  }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Name: [''],
      EmailAddress: [''],
      Password: ['']

    })
    this.getallusers();
  }
  postregisterdetails() {
    this.registermodelobj.Name = this.formValue.value.Name;
    this.registermodelobj.EmailAddress = this.formValue.value.EmailAddress;
    this.registermodelobj.Password = this.formValue.value.Password;

    this.api.postregister(this.registermodelobj)
      .subscribe(res => {
        console.log(res);
        alert("Registerd Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getallusers();
      },
        err => {
          alert("check");
        })
  }
  getallusers() {
    this.api.getregister()
      .subscribe(res => {
        this.registerData = res;
      })
  }
}
