import {Injectable} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class CameraService {

    private options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    }

    constructor(private camera: Camera,
                private toastCtrl: ToastController) {
    }

    takePicture() {
        this.camera.getPicture(this.options).then(async(imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            const base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.error(err);
        });
    }

}
