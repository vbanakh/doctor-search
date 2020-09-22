import { Component, OnInit } from '@angular/core';
import { IFeedback } from '../../shared/interfaces/feedback.interface';
import { FeedbackService } from '../../shared/services/feedback.service';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.scss']
})
export class AdminFeedbackComponent implements OnInit {
  adminFeedback: Array<IFeedback>;
  constructor(private fbService: FeedbackService) { }

  ngOnInit(): void {
    this.getFB();
  }
  getFB():void{
    this.fbService.getFeedback().subscribe(
      data => {
        this.adminFeedback = data;
      }
    )
  }
}
