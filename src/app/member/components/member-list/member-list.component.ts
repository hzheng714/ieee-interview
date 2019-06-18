import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';
import {Member} from '../../../core/models/member';
import {MemberListResponse} from '../../../core/models/member-list.response';
import {MemberService} from '../../../core/services/member.service';


@Component({
    selector: 'app-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: ['./member-list.component.scss'],
})
export class MemberListComponent implements OnInit {

    @Input()
    pageSize: number;

    @ViewChild(IonInfiniteScroll)
    infiniteScroll: IonInfiniteScroll;

    pageIndex = 0;

    members: Member[] = [];

    constructor(private memberService: MemberService) {
    }

    ngOnInit() {
        if (!this.pageSize) {
            this.pageSize = 20;
        }
        this.load();
    }

    load() {
        this.memberService.list(++this.pageIndex, this.pageSize)
            .subscribe((response: MemberListResponse) => {
                this.members.push.apply(this.members, response.results);
                this.infiniteScroll.complete();
            });
    }

}
