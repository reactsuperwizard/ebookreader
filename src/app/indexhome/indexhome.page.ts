import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';
import { AppRoutingPreloaderService } from '../services/app-routing-preloader.service';

@Component({
  selector: 'app-indexhome',
  templateUrl: './indexhome.page.html',
  styleUrls: ['./indexhome.page.scss'],
})
export class IndexhomePage implements OnInit {

  indexdata: any[];

  constructor(private data: IndexService, private routingService: AppRoutingPreloaderService) { }

  ngOnInit() {
    this.getData();
  }

  /* preload main content page resources */
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('maincontent');
  }

  /* function for returning data of index from json using the service */
  getData() {
    this.data.getIndexData().subscribe((data: any) => {
      this.indexdata = data;
    });
  }
/* changes background color of index item based on its position,
to change the colors, you can set variables in variables.scss for odd and even to your liking */
  getClCss(pos: number) {
    const res = pos % 2;
    if (res === 0) {
      return 'odd';
    } else {return 'even'; }
  }
}
