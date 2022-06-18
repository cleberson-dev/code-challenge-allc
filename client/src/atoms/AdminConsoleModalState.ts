import {atom} from 'recoil';

const showAdminConsoleModalState = atom<boolean>({
  key: 'showAdminConsoleModal',
  default: false,
});

export {showAdminConsoleModalState};
