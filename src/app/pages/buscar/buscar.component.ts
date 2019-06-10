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

  constructor(private _ss:SpotifyService) { }

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
    })
  }

}
