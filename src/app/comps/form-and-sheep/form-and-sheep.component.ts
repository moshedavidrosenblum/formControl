import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-and-sheep',
  templateUrl: './form-and-sheep.component.html',
  styleUrls: ['./form-and-sheep.component.css']
})
export class FormAndSheepComponent implements OnInit {
  
  name=new FormControl('')
  phone=new FormControl('')

  newLeads:{}[]=[]

  constructor() { }

  ngOnInit() {
  }
  pupils = [
    { name : 'ariel', birthYear:1984},
    { name : 'daniel', birthYear:1986},
    { name : 'karlin', birthYear:1986},
    { name : 'karlin2', birthYear:1982},
    { name : 'natan', birthYear:1995},
  ]

  pupilsLocalFilter:{}[]=this.pupils
  searchLocal(term:string):void{
    this.pupilsLocalFilter=this.pupils.filter(
      item =>item.name.includes(term))
  }

  addLead(){
    console.log("addLead() works ");
    
    this.newLeads.push({
     name:this.name.value,
     phone:this.phone.value, 
    })
  }

  sheep=new FormControl('');
  defualtSheep()
{
  this.sheep.setValue('moo')
}

}
