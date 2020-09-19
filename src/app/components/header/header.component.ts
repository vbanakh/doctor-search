import { Component, OnInit, TemplateRef } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  iconLocation = faMapMarkerAlt;
  modalRef: BsModalRef;
  switch: boolean;

  userEmail: string;
  userPassword: string;
  firstName: string;
  lastName: string;

  logIn: boolean;
  loginStatus: boolean;
  loginUrl: string;
  loginName: string;
  
  constructor(private modalService: BsModalService,
              private authService: AuthService) { }


  ngOnInit(): void {
    this.checkLogin();
    this.updateCheckLogin();
  }
  
  loginModal(template: TemplateRef<any>): void{
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  loginUser():void{
    this.authService.login(this.userEmail, this.userPassword);
    this.resetForm();
    this.modalRef.hide();
  }
  signUpClick():void{
    document.getElementById('container').classList.add('right-panel-active');
  }
  signInClick():void{
    document.getElementById('container').classList.remove('right-panel-active');
  }

  registerUser(): void{
    this.authService.signUp(this.userEmail, this.userPassword, this.firstName, this.lastName);
    this.resetForm();
    document.getElementById('container').classList.remove('right-panel-active');
  }
  
  private resetForm(): void {
    this.userEmail = '';
    this.userPassword = '';
    this.firstName = '';
    this.lastName = '';
  }

  private updateCheckLogin(): void {
    this.authService.userStatusChanges.subscribe(
      () => {
        this.checkLogin();
      }
    );
  }

  private checkLogin(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    if (admin != null && admin.role === 'admin' && admin.access) {
      this.loginStatus = true;
      this.loginName = 'адмін';
      this.loginUrl = 'admin';
    }
    else if (user != null && user.role === 'user') {
      this.loginStatus = true;
      this.loginName = 'кабінет';
      this.loginUrl = 'profile';
    }
    else {
      this.loginStatus = false;
      this.loginName = '';
      this.loginUrl = '';
    }
  }

  // burger():void {
  //   const element = document.getElementById("menu");
  //   element.classList.toggle("menu");
  //   element.classList.toggle("hidden");
  // }
}
