import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  title = 'dynamicTable01';

  userForm: FormGroup;
  listData: any;


  constructor(private fb:FormBuilder){

    this.listData = [];

    this.userForm = this.fb.group({
      first: ['',Validators.required],
      middle:['', Validators.required],
      last:['', Validators.required],
    })
  }

  public addItem() : void{
    

    this.listData.push(this.userForm.value);
    this.userForm.reset();
   
  }

  public reset() : void{
    this.userForm.reset();
  }

  // removeItem(element){
  //   this.listData.forEach(value.index)=>{
  //     if(value == element){
  //       this.listData.splice(index, 1); 
  //     }  
  //   };
  // }
  ngOnInit(): void {
  }

}

