import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.scss']
})
export class ItemsFormComponent implements OnInit {
// @Output() saveEmitter = new EventEmitter();
//   text:string = "";
// save(){
//   this.saveEmitter.emit();
//   console.log(this.text)
// }
itemForm: FormGroup ;

constructor(private formBuilder: FormBuilder){
this.itemForm = this.formBuilder.group({
  name:["",Validators.required],
  precio:[0,Validators.required],
  description: ["",Validators.required],
  img: ["",Validators.required],
  opinion:[]
})

}
ngOnInit(): void {
    this.itemForm.valueChanges.subscribe(changes =>{
      console.log(changes)
    })
}
submit(){
  console.log(this.itemForm.value)
  if(this.itemForm.status === "VALID"){
    //crear funcion de post para subir el producto .
  }
}
}
