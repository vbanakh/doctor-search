import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DoctorService } from '../../shared/services/doctor.service';
import { IDoctor } from '../../shared/interfaces/doctor.interfsce';
import { ISpeciality } from '../../shared/interfaces/speciality.interface';
import { SpecialityService } from '../../shared/services/speciality.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  iconSearch = faSearch;
  searchWord = '';
  doctors: Array<IDoctor>;
  param: string = 'speciality.nameUA';
  paramSetting: string = 'Вкажіть спеціальність лікаря';
  keyword = 'name';
  specialities = ['педіатр',
    'терапевт',
    'хірург',
    'стоматолог',
    'сімейний лікар',
    'гінеколог',
    'уролог',
    'кардіолог',
    'психотерапевт',
    'психіатр',
    'фізіотерапевт',
    'дерматовенеролог',
    'офтальмолог',
    'онколог',
    'лікар з спортивної медицини',
    'акушер',
    'отоларинголог',
    'імунолог',
    'рентгенолог',
    'ендокринолог',
    'гастроентеролог',
    'невропатолог',
    'ревматолог',
    'проктолог',
    'рефлексотерапевт',
    'пульмонолог',
    'алерголог',
    'ортопед'
  ]
  search: string;
  @Input() toParam: string;
  @Input() toWord: string;
  @Output() fromChild = new EventEmitter<Array<IDoctor>>();
  
  constructor(private docService: DoctorService,
              private specService: SpecialityService,
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.setting();
  }

  checkWork() {
    if (this.param === 'speciality.nameUA') {
      this.paramSetting = 'Вкажіть спеціальність лікаря';
    }
    else if (this.param === 'lastnameUA') {
      this.paramSetting = 'Вкажіть прізвище лікаря';
    }
    else if (this.param === 'clinic.nameUA') {
      this.paramSetting = 'Вкажіть назву клініки';
    }
  }

  getSearchDoc(): void {
    this.docService.getJSONDoctorSearch(this.param, this.searchWord).subscribe(data => {
      this.doctors = data;
      this.fromChild.emit(this.doctors);
    });
  }

  setting():void{
    this.searchWord = this.toWord;
    this.param = this.toParam;
    // console.log(this.param);
  }
  



}
