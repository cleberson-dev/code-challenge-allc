import {useState} from 'react';
import {GoChevronDown, GoChevronUp} from 'react-icons/go';
import {useSetRecoilState} from 'recoil';
import {showAdminConsoleModalState} from '../atoms/AdminConsoleModalState';
import Logger from '../utils/Logger';
import {AdminConsoleDropdown} from './AdminConsoleDropdown';

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
    minHeight: '300px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#414141',
    boxShadow:
      '0px 6px 20px 0px rgba(176, 190, 197, 0.32), 0px 2px 4px 0px rgba(176, 190, 197, 0.32)',
  },
  dropdownButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#C6C6C6',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '100%',
    boxSizing: 'border-box',
    height: '60px',
  },
  optionTitle: {
    fontSize: '14px',
    fontWeight: '600',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '20px 0',
    fontWeight: 600,
  },
  cancelButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    width: '140px',
    height: '50px',
    borderRadius: '5px',
    marginRight: '15px',
    cursor: 'default',
  },
  startWarningButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F47564',
    color: 'white',
    width: '140px',
    height: '50px',
    borderRadius: '5px',
    cursor: 'default',
  },
};

type WarningType = {
  type: string;
  title: string;
  description: string;
};

const options: WarningType[] = [
  {
    type: 'download',
    title: 'Download Server Unavailable Warning',
    description:
      'We are currently experiencing issues with our download server, we’re working on fixing it as soon as possible',
  },
  {
    type: 'upload',
    title: 'Upload Server Unavailable Warning',
    description:
      'We are currently experiencing issues with our upload server, we’re working on fixing it as soon as possible',
  },
  {
    type: 'data-inconsistency',
    title: 'Data Inconsistency Warning',
    description:
      'We are currently experiencing some issues with data consistency, we’re working on fixing it as soon as possible',
  },
];

const AdminConsoleModal = (): JSX.Element => {
  const setShowAdminConsoleModal = useSetRecoilState(
    showAdminConsoleModalState
  );

  const [showDropdown, setShowDropdown] = useState(false);
  const [currentOption, setCurrentOption] = useState<WarningType | null>(null);
  const [iconColor, setIconColor] = useState('#414141');
  const ChevronIcon = showDropdown ? GoChevronUp : GoChevronDown;
  const [cancelButtonOpacity, setCancelButtonOpacity] = useState(1.0);
  const [startWarningButtonOpacity, setStartWarningButtonOpacity] =
    useState(1.0);

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
        <h1>Admin Console</h1>

        <h4>Start a Side Wide Warning</h4>
        <div
          style={styles.dropdownButton}
          onClick={e => {
            e.stopPropagation();
            setShowDropdown(!showDropdown);
          }}
        >
          <div style={styles.optionTitle}>{currentOption?.title}</div>
          <ChevronIcon
            size={30}
            color={iconColor}
            onMouseEnter={() => setIconColor('#525252')}
            onMouseLeave={() => setIconColor('#414141')}
            onClick={event => {
              event.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
          />
        </div>
        {showDropdown && (
          <AdminConsoleDropdown
            warnings={options}
            onSelect={warning => {
              setShowDropdown(!showDropdown);
              setCurrentOption(warning);
            }}
          />
        )}
        <div style={styles.footer}>
          <div
            style={{...styles.cancelButton, opacity: cancelButtonOpacity}}
            onClick={onExitModal}
            onMouseEnter={() => setCancelButtonOpacity(0.8)}
            onMouseLeave={() => setCancelButtonOpacity(1.0)}
          >
            Cancel
          </div>

          <div
            style={{
              ...styles.startWarningButton,
              opacity: currentOption === null ? 0.5 : startWarningButtonOpacity,
            }}
            onMouseEnter={() =>
              currentOption !== null && setStartWarningButtonOpacity(0.8)
            }
            onMouseLeave={() =>
              currentOption !== null && setStartWarningButtonOpacity(1.0)
            }
            onClick={event => {
              event.stopPropagation();
              if (currentOption !== null) {
                setShowDropdown(false);
                // setCurrentOption(currentOption);
                Logger.info(
                  'Switched warning to ' +
                    currentOption?.title +
                    ' ' +
                    currentOption?.description
                );
                onExitModal();
              }
            }}
          >
            Change User
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminConsoleModal;