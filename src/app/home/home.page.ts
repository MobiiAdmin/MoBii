import { Component } from '@angular/core';
import { ToastController,IonModal  } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message='test'
  toast=false
  name:any
  count=0;
  adminMode=false;

  constructor(private toastController: ToastController,private modal:IonModal) {}

  doorbell() {
    if(!this.toast)
      this.presentToast('Doorbell Pressed!')
  }

  unlock() {
    if(!this.toast)
      this.presentToast('Authenticating...')
  }

  admin(){
    console.log('pressed');
    this.count++;
    if(this.count==1){
      setTimeout(()=>{
        this.count =0
      },1000)
    }
    if(this.count==3) {
      // this.presentToast('hehexd')
      this.adminMode=!this.adminMode;
      let el = document.getElementById('background')
      el?.setAttribute('style', 'background-color:#6B4B3E')
      this.count=0
    }
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 500,
      position: 'middle',
      cssClass:"toast"
    });
    this.toast=true;
    await toast.present()
    await toast.onDidDismiss()
    this.toast=false;
  }
}
