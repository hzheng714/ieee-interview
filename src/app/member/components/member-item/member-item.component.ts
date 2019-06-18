import {Component, Input} from '@angular/core';
import {Member} from '../../../core/models/member';

@Component({
    selector: 'app-member-item',
    templateUrl: './member-item.component.html',
    styleUrls: ['./member-item.component.scss'],
})
export class MemberItemComponent {

    @Input()
    member: Member;

    constructor() {
    }

}
