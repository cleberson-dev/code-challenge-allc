import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
};

const LoadingOverlay = () => {
  return (
    <div style={styles.root}>
      <ClipLoader loading={true} color="grey" size={40} />
    </div>
  );
};

export default LoadingOverlay;
