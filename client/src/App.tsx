import {useRecoilState, useRecoilValue} from 'recoil';

import './App.css';
import {showAdminConsoleModalState} from './atoms/AdminConsoleModalState';
import {showModalState} from './atoms/ChangeUserModalState';
import {showSettingsMenuState} from './atoms/SettingsMenuState';
import {warningState} from './atoms/UserState';
import AdminConsoleModal from './components/AdminConsoleModal';
import ChangeUserModal from './components/ChangeUserModal';
import SettingsMenu from './components/SettingsMenu';
import SiteWideWarningBar from './components/SiteWideWarningBar';
import HomeScreen from './containers/HomeScreen';

const App = () => {
  const showChangeUserModal = useRecoilValue(showModalState);
  const showAdminConsoleModal = useRecoilValue(showAdminConsoleModalState);
  const showSettingsMenu = useRecoilValue(showSettingsMenuState);
  const warning = useRecoilValue(warningState);

  return (
    <div className="App">
      {warning && <SiteWideWarningBar content={warning.description} />}
      <HomeScreen />
      {showChangeUserModal ? <ChangeUserModal /> : null}
      {showAdminConsoleModal ? <AdminConsoleModal /> : null}
      {showSettingsMenu ? <SettingsMenu /> : null}
    </div>
  );
};

export default App;
