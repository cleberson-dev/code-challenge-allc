import {atom} from 'recoil';

const showSettingsMenuState = atom<boolean>({
  key: 'showSettingsMenu',
  default: false,
});

export {showSettingsMenuState};
