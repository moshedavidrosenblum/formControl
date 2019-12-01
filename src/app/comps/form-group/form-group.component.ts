import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModelContact } from 'src/app/modrls/model-contact';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  message:string = 'fill da formski' 

  contactUsForm = new FormGroup({
    subject : new FormControl(''),
    content : new FormControl(''),
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    adrress : new FormControl(''),
    credit : new FormControl(''),
    gender : new FormControl(''),
    hasidut : new FormControl(''),
    age : new FormControl(''),
    whatsapp : new FormControl(''),
  })
  constructor(public contactSvc:ContactUsService) { }

  ngOnInit() {
  }
  contactUsForm_onSubmit(){
    let contactus:ModelContact = this.contactUsForm.value
    if (contactus.whatsapp) {
      this.message = 'we\'ll contact u via whatsapp'
    } else {
      this.message = 'we\'ll call u '
    }
    console.log('contactus value', contactus);

    this.contactSvc .contactList.push(contactus)
  }


}
