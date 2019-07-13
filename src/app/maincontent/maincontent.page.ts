import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.page.html',
  styleUrls: ['./maincontent.page.scss'],
})
export class MaincontentPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('panel1') panel1: ElementRef;
  @ViewChild('panel2') panel2: ElementRef;
  @ViewChild('panel3') panel3: ElementRef;

  selectedSection = 0;

  public panelPos1: number;
  public panelPos2: number;
  public panelPos3: number;

  constructor(private activatedRoute: ActivatedRoute, private loadingController: LoadingController) {
    this.selectedSection = Number(this.activatedRoute.snapshot.paramMap.get('section'));
  }
  ngOnInit() {
    this.loadpage();
  }
  /* Function for loading page,1 second delay is to allow dom to define page bounderies used for scrolling
  to specific pannel based on the index option selected */
  async loadpage() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Going to section...',
      translucent: true
    });
    loading.present();
    setTimeout(() => {
      this.panelPos1 = this.panel1.nativeElement.getBoundingClientRect().top;
      this.panelPos2 = this.panel2.nativeElement.getBoundingClientRect().top;
      this.panelPos3 = this.panel3.nativeElement.getBoundingClientRect().top;
      this.openPannel(this.selectedSection);
      loading.dismiss();
    }, 1000);
  }
  /* function called with index position passed from index page,
  this then calls scrollTo function which uses the page bounderies of selected panel to scroll to 
  the pannel selected */
  openPannel(numb) {
    if (numb === 1) {
      this.scrollTo(0, this.panelPos1);
    }
    if (numb === 2) {
      this.scrollTo(0, this.panelPos2);
    }
    if (numb === 3) {
      this.scrollTo(0, this.panelPos3);
    }
  }
  scrollTo(x, y) {
    this.content.scrollToPoint(x, y + 20, 300);
  }
}
