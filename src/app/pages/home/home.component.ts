import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faDesktop} from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { faFlask} from '@fortawesome/free-solid-svg-icons';
import { faNotesMedical} from '@fortawesome/free-solid-svg-icons';

faDesktop



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
iconSearch = faSearch;
iconUsd = faHandHoldingUsd;
iconTv = faDesktop;
iconClock = faClock;
iconFlask = faFlask;
iconNote =  faNotesMedical;
  constructor() { }

  ngOnInit(): void {
  }

}
