import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  url = this.router.url

  @Input() items:any[];

  
  constructor(private router:Router) { 
  }

  ngOnInit() {
  }

  irParecidas(id:string){
    this.router.navigate(['/recomendadas',id])
  }

  isHome(){
    if(this.url === '/' || this.url ==='/home'){
      return true;
    }else{
      return false;
    }
  }

}
