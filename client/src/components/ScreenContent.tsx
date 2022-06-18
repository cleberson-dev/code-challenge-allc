import React from 'react';

const styles: {[key: string]: React.CSSProperties} = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
};

const ScreenContent = () => {
  return (
    <div style={styles.root}>
      <h1>Home Page</h1>
    </div>
  );
};

export default ScreenContent;
