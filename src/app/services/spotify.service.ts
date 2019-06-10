import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){

    let token:string = 'BQCum1Ib042o3qRUjE-oTnNN0h5UtBdAAp4-Hke0oRyjq5xePoZdsxLFYJMsWQjI75Tgk2dxJT1j7Mmxo6c';

    const headers= new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(`https://api.spotify.com/v1/${query}`, {headers})
  }

  getPlayList(){
    return this.getQuery("playlists/3wOq4Lguu0LaWxRBPGRUKJ/tracks").pipe(map(
      data => data['items']
    ))
  }

  getRecomendadas(id:string){
    return this.getQuery(`recommendations?limit=20&seed_tracks=${id}`).pipe(map(
      data => data['tracks']
    ))
  }

  buscarArtista(texto:string){
    return this.getQuery(`search?q=${texto}&type=artist&limit=20`).pipe(map(
      data=>data['artists'].items
    ))
  }

}



