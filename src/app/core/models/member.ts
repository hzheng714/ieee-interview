import {MemberLocation} from './member-location';
import {MemberName} from './member-name';
import {MemberPictures} from './member-pictures';
import {Membership} from './membership';

export interface Member {

    name: MemberName;
    registered: Membership;
    picture: MemberPictures;
    location: MemberLocation;

}
