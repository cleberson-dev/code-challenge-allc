import {useSetRecoilState} from 'recoil';
import {showAdminConsoleModalState} from '../atoms/AdminConsoleModalState';

const styles: {[key: string]: React.CSSProperties} = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    left: '0',
    top: '0',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(8px)',
  },
  modal: {
    width: '500px',
    height: '300px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#414141',
    boxShadow:
      '0px 6px 20px 0px rgba(176, 190, 197, 0.32), 0px 2px 4px 0px rgba(176, 190, 197, 0.32)',
  },
};

const AdminConsoleModal = (): JSX.Element => {
  const setShowAdminConsoleModal = useSetRecoilState(
    showAdminConsoleModalState
  );

  const onExitModal = () => {
    setShowAdminConsoleModal(false);
  };

  return (
    <div
      style={styles.root}
      data-testid="admin_console_modal"
      onClick={onExitModal}
    >
      <div style={styles.modal}>
        <h1>AdminConsoleModal</h1>
      </div>
    </div>
  );
};

export default AdminConsoleModal;
