import { Component } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder,Validators  } from '@angular/forms'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
 title = ""

  
  registerForm!:FormGroup
  data:any[]=[]
  table1=false

  constructor(private validators:Validators ,private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      user: ['', Validators.required  ],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })


  }

  register(){
    if(this.registerForm.valid)
    console.log(this.registerForm.value,'this is value');
   this.table1=true
      this.data.push(this.registerForm.value)
      this.registerForm.reset()

  }

  remove(index:any){
    this.data.slice(index -1)
  }
  edit(index:any){

     this.registerForm.patchValue = this.data.values

  }

  
 

}
