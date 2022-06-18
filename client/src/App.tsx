import {useRecoilValue} from 'recoil';

import './App.css';
import {showModalState} from './atoms/ChangeUserModalState';
import {showSettingsMenuState} from './atoms/SettingsMenuState';
import ChangeUserModal from './components/ChangeUserModal';
import SettingsMenu from './components/SettingsMenu';
import HomeScreen from './containers/HomeScreen';

const App = () => {
  const showChangeUserModal = useRecoilValue(showModalState);
  const showSettingsMenu = useRecoilValue(showSettingsMenuState);

  return (
    <div className="App">
      <HomeScreen />
      {showChangeUserModal ? <ChangeUserModal /> : null}
      {showSettingsMenu ? <SettingsMenu /> : null}
    </div>
  );
};

export default App;
