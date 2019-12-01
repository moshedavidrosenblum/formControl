import { Injectable } from '@angular/core';
import { ModelContact } from '../modrls/model-contact';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor() { }

  contactList:ModelContact[]=[]
}
