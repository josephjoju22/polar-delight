import { Component, OnInit , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loggedInUser: string | undefined;
  userRoles = ['VP of Operations', 'Service Technician', 'Admin', 'TV User'];
  defaultuserRole: any;
  constructor(
    // private authService: MsalService,
    private router: Router,
    // private rotationService: ScreenRotationService
  ) {}

  ngOnInit(): void {
    this.defaultuserRole = localStorage.getItem('role')
      ? localStorage.getItem('role')
      : 'VP of Operations';
    // this.loggedInUser = this.authService.getAccount().name.split('.').join(' ');
    this.loggedInUser = "Joseph Joju"
    // if (this.defaultuserRole == 'TV User') this.rotationService.rotation();
    if (this.defaultuserRole == 'Admin') {
      localStorage.removeItem('slideshow');
      localStorage.removeItem('tsqExpressions');
    }
  }

  home() {
    this.router.navigate(['/home/polar-delight']);
  }
  logout() {
    sessionStorage.removeItem('tsqExpressions');
    localStorage.removeItem('role');
    //this.authService.logout();
    this.router.navigate(['/logout']);
  }
  userDefinedTabs(role = 'VP of Operations') {
    localStorage.setItem('role', role);
    location.reload();
  }
}

