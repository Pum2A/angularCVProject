import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readme:boolean = true;

  showme:boolean = false;
  showmee:boolean = false;

  buttonFunction(){
    this.readme = !this.readme;
    this.showme = !this.showme;
  }
  buttonFunction2(){
    this.readme = !this.readme;
    this.showmee = !this.showmee;
  }

}
