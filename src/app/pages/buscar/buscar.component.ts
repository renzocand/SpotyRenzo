import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  arrayArtistas:any[] = [];
  loading:boolean = false;
  error:boolean;
  mensajeError:string;

  constructor(private _ss:SpotifyService) { 
    this.error = false;
  }

  ngOnInit() {
  }

  buscarArtista(valor:string){
    // if(valor = )
    if(valor === ''){
      return null
    }
    this.loading = true;
    this._ss.buscarArtista(valor).subscribe(data=>{
      // console.log(data);
      this.arrayArtistas = data
      this.loading = false;
    },(error:any)=>{
      this.error = true;
      this.loading = false;
      this.mensajeError = error.error.error.message;
    })
  }

}
