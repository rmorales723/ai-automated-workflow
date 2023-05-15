import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts :  Array<Contact>;  
  dataService: ContactsService;
  constructor(private contactsService: ContactsService) 
  { 
    this.dataService = contactsService;
  }

  ngOnInit() 
  {
    this.contacts = this.dataService.contacts;
  }

}
