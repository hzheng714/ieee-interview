import { Component } from '@angular/core';
import {CameraService} from '../../../core/services/camera.service';

@Component({
  selector: 'app-member',
  templateUrl: 'member.page.html',
  styleUrls: ['member.page.scss'],
})
export class MemberPage {

  constructor(private cameraService: CameraService) {}

  takePicture() {
    this.cameraService.takePicture();
  }

}
