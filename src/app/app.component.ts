import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type : 'blueprint' , name : 'Test Server' , content : 'Just A Test'}];

  constructor(){}


  onServerCreated(serverData : {serverName : string , serverContent : string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content : serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintdata : {serverName : string , serverContent : string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintdata.serverName,
      content: bluePrintdata.serverContent
    });
  }



}
