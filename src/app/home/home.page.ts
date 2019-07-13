import { Component, OnInit } from '@angular/core';
import { AppRoutingPreloaderService } from '../services/app-routing-preloader.service';
import { LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private routingService: AppRoutingPreloaderService,
              private loadingController: LoadingController,
              private nav: NavController) {

  }


  ngOnInit() {
    this.loadpage();
  }
  async loadpage() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: '',
      cssClass:'transparentbg',
      translucent: true
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.nav.navigateRoot('/indexhome');
    }, 3000);
  }

  async ionViewDidEnter() {
    await this.routingService.preloadRoute('indexhome');
  }
}
