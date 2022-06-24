import {useState} from 'react';

type SiteWideWarningBarProps = {
  content: string;
};

const styles: {[key: string]: React.CSSProperties} = {
  container: {
    background: '#F47564',
    width: '100%',
    color: 'white',
    padding: '19px 30px',
    paddingRight: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '600',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#414141',
    color: 'white',
    border: 0,
    outline: 0,
    borderRadius: '5px',
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: '600',
  },
};

const SiteWideWarningBar = ({
  content,
}: SiteWideWarningBarProps): JSX.Element | null => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div style={styles.container}>
      <span>{content}</span>
      <div>
        <button style={styles.button} onClick={() => setDismissed(true)}>
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default SiteWideWarningBar;
