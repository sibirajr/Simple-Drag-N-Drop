import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public droppedItems:Array<fruits>;
  constructor(){
    this.droppedItems = new Array<fruits>;
  }

  public ngOnInit() {
    console.log('Home');
  }
  public items = [
    { name: "Apple", type: "fruit" },
    { name: "Carrot", type: "vegetable" },
    { name: "Orange", type: "fruit" }
  ];

  onItemReturnDrop(e:any){
    this.items.push(e.dragData);
    var index=this.droppedItems.findIndex(x=>x.name==e.dragData.name);
    if(index>=0){
      this.droppedItems.splice(index,1);
    }
  }

  public onItemDrop(e: any) {
    // Get the dropped data here
    this.droppedItems.push(e.dragData);
    var index=this.items.findIndex(x=>x.name==e.dragData.name);
    if(index>=0){
      this.items.splice(index,1);
    }
  }
}

 class fruits{
  name:string;
  type:string;
}
