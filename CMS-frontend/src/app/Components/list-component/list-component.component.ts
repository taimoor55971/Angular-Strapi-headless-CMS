import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Meme } from 'src/app/Utils/interface';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  memes$:Observable<Meme[]>
  constructor(private data:DataService) {
    this.memes$ = this.data.getData();
    console.log(this.memes$)
    this.memes$.subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
      
  }

}
