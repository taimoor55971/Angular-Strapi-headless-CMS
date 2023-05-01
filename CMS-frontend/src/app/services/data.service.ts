import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Meme } from '../Utils/interface';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  getData() {
    return this.http.get<Meme[]>(`${environment.strapiURL}/api/memes?populate=*`).pipe
      (
        map((res: any) => {
          console.log("res.data")
          return res.data
        }),
        map((meme: Meme[]) => {
          return meme.map(meme => {
            meme.attributes.image.data.attributes.url = `${environment.strapiURL}${meme.attributes.image.data.attributes.url}`
            return meme
          })
        })
    
    )
  }
}
