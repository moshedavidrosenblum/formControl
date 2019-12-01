import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact-us-component',
  templateUrl: './contact-us-component.component.html',
  styleUrls: ['./contact-us-component.component.css']
})
export class ContactUsComponentComponent implements OnInit {

  constructor(public contactSvc:ContactUsService) { }

  ngOnInit() {
  }

}
