import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { IDoctor } from 'src/app/shared/interfaces/doctor.interfsce';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  doctors: Array<IDoctor> = [];
  speciality: string;
  searchWord = '';
  p: number = 1;
  mr = "50px";
  constructor(private docService: DoctorService,
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.getViewDoctor();
  }

  private getDoctors(): void {
    this.docService.getJSONDoctor().subscribe(data => {
      this.doctors = data;
    });
  }


  parentGetDoctors(doc: Array<IDoctor>):void{
    if(doc.length == 0){
      this.getDoctors(); 
    }
   else{
    this.doctors = doc;
   }
  }

  private getViewDoctor(): void {
    const param = this.actRoute.snapshot.paramMap.get('param');
    const word = this.actRoute.snapshot.paramMap.get('word');
    this.docService.getJSONDoctorSearch(param, word).subscribe(data => {
      this.doctors = data;
    });
  }

  }



