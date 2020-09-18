import { Component, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-up-button',
  templateUrl: './up-button.component.html',
  styleUrls: ['./up-button.component.scss']
})
export class UpButtonComponent implements OnInit {
  chevron = faChevronUp;
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll);
  }

  scroll(event) {
    if (window.scrollY > 50) {
      document.getElementById('to_top').style.display = 'block';
    }
    else if (window.scrollY == 0) {
      document.getElementById('to_top').style.display = 'none';
    }
  }

  toTop(): void {
    window.scrollTo({
      top: 0
    })
  }
}
