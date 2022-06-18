import {atom} from 'recoil';
import {User} from '../models/User';

const currentUserState = atom<User | null>({
  key: 'currentUser',
  default: null,
});

const nextUserState = atom<User | null>({
  key: 'nextUser',
  default: null,
});

export {currentUserState, nextUserState};
