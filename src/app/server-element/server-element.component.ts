import { AfterViewInit, Component, ElementRef, Input, OnInit , ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit , AfterViewInit {

 @Input() element!: {type : string , name : string , content : string};
 @ViewChild('heading', { static: true })
  header!: ElementRef;

  constructor() { }

  ngOnInit(): void {

    console.log('text-content ' ,this.header.nativeElement.textContent)
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit is called")
    console.log('text-content ' ,this.header.nativeElement.textContent)

  }



}
