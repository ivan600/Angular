import { Component } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  i:number = 0;

  constructor(){
    window.addEventListener("load", ()=>{
      var txt = document.querySelector("#container textarea") as HTMLElement;
      var txtSize = document.querySelector("#txt-size-container input") as HTMLInputElement;
      txtSize.addEventListener('input', ()=>{
        txt.style.fontSize = txtSize.value + "px";
        console.log();
      });
    });
  }

  center(){
    var txt = document.querySelector("#container textarea") as HTMLElement;
    var center_btn = document.querySelector("#centerBtn") as HTMLElement;
    this.i++
    if(this.i%2 !=0){
      txt.style.textAlign = "center";
      center_btn.innerHTML= "Left";
    }else{
      txt.style.textAlign = "left";
      center_btn.innerHTML= "Center";
    }
    
  }
}
