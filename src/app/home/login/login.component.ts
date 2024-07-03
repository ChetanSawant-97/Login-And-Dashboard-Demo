import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { bootstrapX } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NgIcon],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  viewProviders: [provideIcons({bootstrapX})]

})
export class LoginComponent {
  router = inject(Router);

  userList = {
      "sawantchetan@gmail.com" : "chetan",
      "mayank@gmail.com" : "pass123",
      "manav@gmail.com"  : "pass123"
    }
  

  protected loginForm = new FormGroup({
    email :  new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required])
  })

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let email = this.loginForm.value.email;
      if (email && email in this.userList) {
        let password = this.userList[email as keyof typeof this.userList];
    
        if(password == this.loginForm.value.password){
          this.router.navigate(["/user"]);
        }
      }else{
        console.log("Email Not Found");
      }
    }
  }

  closeForm(){
    this.router.navigate([""]);
  }

}
