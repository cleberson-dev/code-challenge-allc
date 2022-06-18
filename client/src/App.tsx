import {useRecoilValue} from 'recoil';

import './App.css';
import {showAdminConsoleModalState} from './atoms/AdminConsoleModalState';
import {showModalState} from './atoms/ChangeUserModalState';
import {showSettingsMenuState} from './atoms/SettingsMenuState';
import AdminConsoleModal from './components/AdminConsoleModal';
import ChangeUserModal from './components/ChangeUserModal';
import SettingsMenu from './components/SettingsMenu';
import HomeScreen from './containers/HomeScreen';

const App = () => {
  const showChangeUserModal = useRecoilValue(showModalState);
  const showAdminConsoleModal = useRecoilValue(showAdminConsoleModalState);
  const showSettingsMenu = useRecoilValue(showSettingsMenuState);

  return (
    <div className="App">
      <HomeScreen />
      {showChangeUserModal ? <ChangeUserModal /> : null}
      {showAdminConsoleModal ? <AdminConsoleModal /> : null}
      {showSettingsMenu ? <SettingsMenu /> : null}
    </div>
  );
};

export default App;
