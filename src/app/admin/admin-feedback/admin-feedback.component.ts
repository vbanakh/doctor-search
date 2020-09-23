import { Component, OnInit, TemplateRef } from '@angular/core';
import { IFeedback } from '../../shared/interfaces/feedback.interface';
import { FeedbackService } from '../../shared/services/feedback.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Feedback } from 'src/app/shared/models/feedback.model';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.scss']
})
export class AdminFeedbackComponent implements OnInit {
  adminFeedback: Array<IFeedback>;
  fbStatus: string;
  feedback: IFeedback;
  modalRef: BsModalRef;
  constructor(private fbService: FeedbackService,
              private modalService: BsModalService) { }

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
  
  openDetailsModal(template: TemplateRef<any>, fb: IFeedback): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.feedback = fb;
  }

  updateStatus(): void{
    const fbUpdate = new Feedback(this.feedback.id,
      this.feedback.nameUA,
      this.feedback.email,
      this.feedback.phone,
      this.feedback.theme,
      this.feedback.message,
      this.feedback.dateFB,
      this.fbStatus);
      this.fbService.updateFeedback(fbUpdate).subscribe(()=>{
        this.getFB();
      });
  }

  confirmFB(): void{
    this.updateStatus();
    this.fbStatus = '';
    this.modalRef.hide();
  }
}
