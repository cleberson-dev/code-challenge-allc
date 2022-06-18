import React, {useState} from 'react';
import {useSetRecoilState} from 'recoil';

import {showModalState} from '../atoms/ChangeUserModalState';
import {showSettingsMenuState} from '../atoms/SettingsMenuState';

const styles: {[key: string]: React.CSSProperties} = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 'calc(100vw - 220px)',
    top: '90px',
    width: '180px',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderRadius: '5px',
    boxShadow:
      '0px 6px 20px 0px rgba(176, 190, 197, 0.32), 0px 2px 4px 0px rgba(176, 190, 197, 0.32)',
    padding: '10px',
  },
  menuItem: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'default',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
};

const SettingsMenuItemType = Object.freeze({
  SETTINGS: 'SETTINGS',
  HELP: 'HELP',
  CHANGE_USER: 'CHANGE_USER',
});

const SettingsMenuItemConfigs = [
  {
    type: SettingsMenuItemType.SETTINGS,
    label: 'Settings',
    onClick: () => {},
  },
  {
    type: SettingsMenuItemType.HELP,
    label: 'Help',
    onClick: () => {},
  },
  {
    type: SettingsMenuItemType.CHANGE_USER,
    label: 'Change User',
    onClick: (setShowChangeUserModal: (value: boolean) => void) =>
      setShowChangeUserModal(true),
  },
];

const SettingsMenu = () => {
  const setShowChangeUserModal = useSetRecoilState(showModalState);
  const setShowSettingsMenu = useSetRecoilState(showSettingsMenuState);
  const [hoveredMenuItemKey, setHoveredMenuItemKey] = useState<number | null>(
    null
  );

  return (
    <div style={styles.overlay} onClick={() => setShowSettingsMenu(false)}>
      <div style={styles.menu}>
        {SettingsMenuItemConfigs.map((menuItem, idx) => (
          <div
            key={idx}
            style={{
              ...styles.menuItem,
              backgroundColor:
                hoveredMenuItemKey === idx ? '#EEEEEE' : '#FFFFFF',
            }}
            onClick={() => {
              setShowSettingsMenu(false);
              menuItem.onClick(setShowChangeUserModal);
            }}
            onMouseEnter={() => setHoveredMenuItemKey(idx)}
            onMouseLeave={() => setHoveredMenuItemKey(null)}
          >
            {menuItem.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsMenu;
