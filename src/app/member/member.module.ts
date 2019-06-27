import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {MemberItemComponent} from './components/member-item/member-item.component';
import {MemberListComponent} from './components/member-list/member-list.component';
import {MemberPage} from './components/member-page/member.page';
import {MemberRoutingModule} from './member.routing.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        MemberRoutingModule
    ],
    declarations: [
        MemberItemComponent,
        MemberListComponent,
        MemberPage,
    ]
})
export class MemberModule {
}
