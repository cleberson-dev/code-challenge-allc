import React from 'react';

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
    backgroundColor: 'rgba(255, 255, 255)',
  },
};

const ErrorOverlay = () => {
  return (
    <div style={styles.root}>
      <h3>Uh oh, something went wrong, please reload the page!</h3>
    </div>
  );
};

export default ErrorOverlay;
