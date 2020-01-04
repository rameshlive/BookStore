import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ngfor-dirt',
  templateUrl: './ngfor-dirt.component.html',
  styleUrls: ['./ngfor-dirt.component.scss']
})
export class NgforDirtComponent implements OnInit {
  
  moviename: string = "";

  names : string[] = ['primary','secondary','success','info','warning', 'danger'];
  colors : string[] = ['red','blue','yellow','orange'];
  selectedColor : string  = 'red';
  selectedValue : string = "primary";

  show : boolean = false;

  stringVar : string = 'btn btn-info';

  stringArr : string[] = ['btn' , 'btn-danger'];

  cssclass: cssClass = new cssClass();

  btnColor : string = '';

  constructor() { }

  ngOnInit() {
  }

  changeValue(){
    this.show = !this.show;
  }
}

class customer{
    cusId: number;
    cusName : string
}

class cssClass{
  btn : boolean =  true;
  'btn-secondary' : boolean = true;
  'text-danger' : boolean = false;
  fontsize20 : boolean = true;

}