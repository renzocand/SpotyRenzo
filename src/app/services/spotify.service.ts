import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string;

  constructor(private http:HttpClient) {
    this.obtenerToken().subscribe(data=>{
      this.token = data;
      localStorage.setItem("token", this.token)
    })
   }

  getQuery(query:string){

    let token:string = this.token;

    const headers= new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(`https://api.spotify.com/v1/${query}`, {headers})
  }

  obtenerToken(){
     return this.http.get('http://localhost:3000/spotify/615384c835514cf6931dcb4a07b2e2e3/cf78f9b0467f4934be3055f7e3407d94').pipe(map(
       data=>data['access_token']
     ))
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

  getArtista(id:string){
    return this.getQuery(`artists/${id}`).pipe(map(
      data=>data
    ))
  }

  TopTracksArtista(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=PE`).pipe(map(
      data=>data['tracks']
    ))
  }
}



