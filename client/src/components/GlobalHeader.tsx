import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {useRecoilState} from 'recoil';
import {showSettingsMenuState} from '../atoms/SettingsMenuState';
import {MdAccountBox} from 'react-icons/md';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
    backgroundColor: 'white',
    boxShadow:
      '0px 6px 20px 0px rgba(176, 190, 197, 0.32), 0px 2px 4px 0px rgba(176, 190, 197, 0.32)',
    paddingLeft: '40px',
    paddingRight: '20px',
  },
};

const GlobalHeader = () => {
  const [showSettingsMenu, setShowSettingsMenu] = useRecoilState(
    showSettingsMenuState
  );
  const [iconColor, setIconColor] = useState('#414141');

  return (
    <div style={styles.root}>
      <img src={Logo} alt="Logo" height={24} />
      <MdAccountBox
        size={30}
        onClick={() => setShowSettingsMenu(!showSettingsMenu)}
        color={iconColor}
        onMouseEnter={() => setIconColor('#525252')}
        onMouseLeave={() => setIconColor('#414141')}
      />
    </div>
  );
};

export default GlobalHeader;
