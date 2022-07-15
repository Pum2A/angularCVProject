import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  


  visible:boolean = false;

  visible2:boolean = false;

  visible3:boolean = false;

  visible4:boolean = false;

  visible5:boolean = false;

  onClick(){
    this.visible = !this.visible;
  }
  onClick2(){
    this.visible2 = !this.visible2;
  }
  onClick3(){
    this.visible3 = !this.visible3;
  }
  onClick4(){
    this.visible4 = !this.visible4;
  }
  onClick5(){
    this.visible5 = !this.visible5;
  }
  
}
