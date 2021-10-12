import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myimage1:string = "../../../assets/img/logo.png";

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

}
