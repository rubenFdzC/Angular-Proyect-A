import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
@Output()changePageEmitter = new EventEmitter();

  page:number = 1;
constructor(){
}
ngOnInit(): void {
    
}
changePage(newPage:number){
  this.page = newPage;
  this.changePageEmitter.emit(newPage);
}
}
