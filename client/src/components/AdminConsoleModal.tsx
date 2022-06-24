import {useState} from 'react';
import {GoChevronDown, GoChevronUp} from 'react-icons/go';
import {useSetRecoilState} from 'recoil';
import {showAdminConsoleModalState} from '../atoms/AdminConsoleModalState';
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
    width: '450px',
    height: '60px',
  },
  optionTitle: {
    fontSize: '14px',
    fontWeight: '600',
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
      </div>
    </div>
  );
};

export default AdminConsoleModal;
