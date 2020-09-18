import { Component, OnInit } from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  iconMobPhone = faMobileAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
