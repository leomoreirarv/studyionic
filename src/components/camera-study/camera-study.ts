import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CameraStudyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'camera-study',
  templateUrl: 'camera-study.html'
})
export class CameraStudyComponent {

  public images: String[];

  constructor(private camera: Camera, private alertCtrl: AlertController) {
    this.images = new Array<String>();
  }


  getPicture(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: 1, 
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.images.push(imageData);
    }, (err) => {
      this.alertCtrl.create({
        title: "Ops!",
        subTitle: "We have some problem to open your camera",
        buttons: ["OK"]
      });
    })

  }

}
