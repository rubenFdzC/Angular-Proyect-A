import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
newItem =[
  {
  name : "",
  image : "",
  price : "",
  }
]
saveNewItem(){
  console.log("funciona el form")
}
}
