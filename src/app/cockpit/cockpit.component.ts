import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
 @Output() serverCreated = new EventEmitter<{serverName : string , serverContent : string}>();
 @Output() bluePrintCreated = new EventEmitter<{serverName : string , serverContent : string}>();
  // newServerName : string = '';  --. beacuse in this case we are using Local refrencing
  // newServerName : string = ''; 
  // newServerContent = '';  // in this we are doig it with Data Binding


  @ViewChild('serverContentInput')
  serverContentInput!: ElementRef;



  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput : HTMLInputElement) {
    this.serverCreated.emit({
      serverName : nameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput : HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName : nameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    })
  }

}
