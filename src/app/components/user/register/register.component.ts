import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService} from '../../../services/user.service.client'
import { User } from '../../../models/user.model.client'
import { Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 @ViewChild('f') registerForm: NgForm;

  username: string;
  password: string;
  verifypassword: string;
  passwordError : boolean;
  usernameError: boolean;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.passwordError = false;
    this.usernameError = false;
  }
 register(){
  this.username = this.registerForm.value.username;
  this.password = this.registerForm.value.password;
  this.verifypassword = this.registerForm.value.verifypassword;
    
    if(this.password !== this.verifyPassword){
      this.passwordError = true;
    }else{
      this.passwordError = false;
      this.userService.findUserByUsername(this.username).subscribe(
          (user:User)=>{
           this.usernameError = true;

          },

          (error: any)=>{
          const newUser: User = {
        

        _id:"",
        username: this.username,
        password: this.password,
        firstName: "",
        lastName: "",
        email: "",
        };
             
            this.userService.createUser(newUser).subscribe(
              (user: User) =>{

                var id: string = this.userService.findUserByUsername(this.username)._id;
                this.router.navigate(['/user/'+ id]);
              }

              );
          }        
 

          )
    }
    }


 //  if(this.password !== this.verifypassword){
 //  	this.passwordError = true ;
 //  }else{
 //    this.passwordError = false ;
 //    const user: User = this.userService.findUserByUsername(this.username)
 //   if(user){
 //     this.usernameError = true;
 // }else{
 // 	 this.usernameError = false;
 // 	 this.passwordError = false;
 //    const newuser: User = {
 //        _id:"",
	// 	username: this.username,
	// 	password: this.password,
	// 	firstName: "",
	// 	lastName: "",
	// 	email: "",
 // 	 };

 // 	 this.userService.createUser(newUser).subscribe(
 //     (user: User)=>{
 //        var id = this.userService.findUserByUsername(this.username)._id;
 //        this.router.navigate(['/user/'+ id]);
 //     },
 //     (error: Error)=>{
 //       this.usernameError = true;

 //     }
 //    )
 	 
 //    }

   // }
  }


