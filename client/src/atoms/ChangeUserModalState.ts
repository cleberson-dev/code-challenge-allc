import {atom} from 'recoil';

const showModalState = atom<boolean>({
  key: 'showModal',
  default: false,
});

export {showModalState};
