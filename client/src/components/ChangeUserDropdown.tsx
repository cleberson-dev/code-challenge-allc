import React, {useState} from 'react';
import {User} from '../models/User';

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
    padding: '10px',
    marginTop: '220px',
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  menuItem: {
    padding: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'default',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
};

type DropdownProps = {
  users: User[];
  onSelect: (user: User) => void;
};

const ChangeUserDropdown = (props: DropdownProps) => {
  const [hoveredMenuItemKey, setHoveredMenuItemKey] = useState<string | null>(
    null
  );
  return (
    <div style={styles.dropdown}>
      {props.users.length > 0 ? (
        props.users.map((user: User) => {
          return (
            <div
              key={user.id}
              style={{
                ...styles.menuItem,
                backgroundColor:
                  hoveredMenuItemKey === user.id ? '#EEEEEE' : '#FFFFFF',
              }}
              onClick={() => {
                props.onSelect(user);
              }}
              onMouseEnter={() => setHoveredMenuItemKey(user.id)}
              onMouseLeave={() => setHoveredMenuItemKey(null)}
            >
              {user.firstName + ' ' + user.lastName}
            </div>
          );
        })
      ) : (
        <div style={styles.menuItem}>No Users Available</div>
      )}
    </div>
  );
};

export default ChangeUserDropdown;
