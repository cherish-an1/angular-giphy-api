import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs: any[] = [];
  subscription = Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.dataService.getGifs()
      .subscribe((response: any) => {
        this.gifs = response;
      });
    // .subscribe((response: any) => {
    //   console.log('Data', response);
    //   this.gifs = response.data;
      
    // });
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
