import { Component, OnInit } from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume} from '@fortawesome/free-solid-svg-icons';






@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  iconMobPhone = faMobileAlt;
  iconPhone = faPhoneVolume;
  

  constructor() { }

  ngOnInit(): void {
  }

}
