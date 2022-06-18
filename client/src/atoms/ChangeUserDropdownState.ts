import {atom} from 'recoil';

const showDropdownState = atom<boolean>({
  key: 'showDropdown',
  default: false,
});

export {showDropdownState};
