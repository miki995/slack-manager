import { Pipe, PipeTransform } from '@angular/core';
import { IUser, IUserProfile } from 'src/app/models/user';

@Pipe({
  name: 'getUserProfile'
})
export class GetUserProfilePipe implements PipeTransform {

  transform(userId: string, users: IUser[]): IUserProfile {

    if (!users) {
      return null;
    }

    const userFound = users.find(user => user.id === userId);

    return userFound?.profile ? userFound.profile : null;
  }
}
