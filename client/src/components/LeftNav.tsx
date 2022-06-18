import React from 'react';

const styles: {[key: string]: React.CSSProperties} = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '300px',
    backgroundColor: 'white',
    boxShadow:
      '0px 6px 20px 0px rgba(176, 190, 197, 0.32), 0px 2px 4px 0px rgba(176, 190, 197, 0.32)',
    zIndex: -1,
  },
  cta: {
    width: '200px',
    height: '60px',
    backgroundColor: '#414141',
    marginTop: '100px',
    marginBottom: '80px',
    borderRadius: '5px',
    boxShadow:
      '0px 6px 20px 0px rgba(176, 190, 197, 0.32), 0px 2px 4px 0px rgba(176, 190, 197, 0.32)',
  },
  leftNavItem: {
    backgroundColor: '#C6C6C6',
    width: '200px',
    height: '60px',
    marginTop: '20px',
    borderRadius: '5px',
    boxShadow:
      '0px 6px 20px 0px rgba(176, 190, 197, 0.32), 0px 2px 4px 0px rgba(176, 190, 197, 0.32)',
  },
};

const GlobalHeader = () => {
  return (
    <div style={styles.root}>
      <div style={styles.cta} />
      <div style={styles.leftNavItem} />
      <div style={styles.leftNavItem} />
      <div style={styles.leftNavItem} />
      <div style={styles.leftNavItem} />
      <div style={styles.leftNavItem} />
    </div>
  );
};

export default GlobalHeader;
