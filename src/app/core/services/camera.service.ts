import {Injectable} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {SecureStorage, SecureStorageObject} from '@ionic-native/secure-storage/ngx';
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
    };

    constructor(private camera: Camera,
                private toastController: ToastController,
                private secureStorage: SecureStorage) {
    }

    takePicture() {
        this.camera.getPicture(this.options).then(async (imageData) => {
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            this.secureStorage.create('ieee_store').then((storage: SecureStorageObject) => {
                storage.set('picture', base64Image);
            });
            // to show that picture can be retrieved from secure storage
            setTimeout(() => {
                this.secureStorage.create('ieee_store').then((storage: SecureStorageObject) => {
                    storage.get('picture').then(async (data) => {
                        const toaster = await this.toastController.create({
                            message: `${data}`,
                            duration: 2000,
                            position: 'bottom'
                        });
                        await toaster.present();
                    });
                });
            }, 1000);
        }, (err) => {
            console.error(err);
        });
    }

}
