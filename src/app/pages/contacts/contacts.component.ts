import { Component, OnInit } from '@angular/core';
import { faMobileAlt, faBaby } from '@fortawesome/free-solid-svg-icons';
import { Feedback } from '../../shared/models/feedback.model';
import { FeedbackService } from '../../shared/services/feedback.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  iconMobPhone = faMobileAlt;
  fbID =1;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  summary: string;
  description: string;
  constructor(private fbService: FeedbackService) { }

  ngOnInit(): void {
  }
  addFb():void {
    const fb = new Feedback(this.fbID,
                            this.customerName,
                            this.customerEmail,
                            this.customerPhone,
                            this.summary,
                            this.description,
                            new Date());
    delete fb.id;
    this.fbService.addFeedback(fb).subscribe(
      () => {
        this.resetForm();
      }
    )  
  }

  private resetForm(): void{
  this.customerName= '';
  this.customerEmail= '';
  this.customerPhone= '';
  this.summary= '';
  this.description = '';
  }
}
