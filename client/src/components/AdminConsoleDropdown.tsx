import {useState} from 'react';

const styles: {[key: string]: React.CSSProperties} = {
  dropdown: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '450px',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#C6C6C6',
    marginTop: '220px',
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  menuItem: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'default',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    textAlign: 'left',
  },
  title: {
    fontSize: '14px',
    fontWeight: '600',
    margin: 0,
  },
  description: {
    color: '#989898',
    fontSize: '12px',
    fontWeight: '400',
    margin: 0,
  },
};

export const AdminConsoleDropdown = ({
  warnings,
  onSelect,
}: {
  warnings: any[];
  onSelect: (warning: any) => void;
}): JSX.Element => {
  const [hoveredMenuItemKey, setHoveredMenuItemKey] = useState<string | null>(
    null
  );

  return (
    <div onClick={e => e.stopPropagation()} style={styles.dropdown}>
      {warnings.map(warning => (
        <div
          key={warning.type}
          style={{
            ...styles.menuItem,
            backgroundColor:
              hoveredMenuItemKey === warning.type ? '#EEEEEE' : '#FFFFFF',
          }}
          onClick={() => onSelect(warning)}
          onMouseEnter={() => setHoveredMenuItemKey(warning.type)}
          onMouseLeave={() => setHoveredMenuItemKey(null)}
        >
          <h3 style={styles.title}>{warning.title}</h3>
          <p style={styles.description}>{warning.description}</p>
        </div>
      ))}
    </div>
  );
};
