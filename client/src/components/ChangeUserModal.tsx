import React, {useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import {useSetRecoilState, useRecoilState} from 'recoil';
import ChangeUserDropdown from './ChangeUserDropdown';
import {currentUserState, nextUserState} from '../atoms/UserState';
import {showDropdownState} from '../atoms/ChangeUserDropdownState';
import {showModalState} from '../atoms/ChangeUserModalState';
import {User, UserGQLResponse} from '../models/User';
import Logger from '../utils/Logger';
import {GoChevronDown, GoChevronUp} from 'react-icons/go';
import LoadingOverlay from './LoadingOverlay';
import ErrorOverlay from './ErrorOverlay';

interface UserManyData {
  userMany: UserGQLResponse[];
}

interface UserManyVars {
  limit: number;
}

export const GET_USERS = gql`
  query GetUser($limit: Int!) {
    userMany(limit: $limit) {
      _id
      firstName
      lastName
      email
    }
  }
`;

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
  rotate180: {
    transform: 'rotate(180deg)',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '450px',
    padding: '20px',
    fontWeight: 600,
  },
  cancelButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    width: '140px',
    height: '50px',
    borderRadius: '5px',
    marginRight: '15px',
    cursor: 'default',
  },
  changeUserButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ABEFEB',
    width: '140px',
    height: '50px',
    borderRadius: '5px',
    cursor: 'default',
  },
  changeUserButtonDisabled: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ABEFEB',
    opacity: 0.5,
    width: '140px',
    height: '50px',
    borderRadius: '5px',
    cursor: 'default',
  },
};

const ChangeUserModal = () => {
  const {loading, error, data} = useQuery<UserManyData, UserManyVars>(
    GET_USERS,
    {variables: {limit: 100}}
  );
  const setShowModal = useSetRecoilState(showModalState);
  const [showDropdown, setShowDropdown] = useRecoilState(showDropdownState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [nextUser, setNextUser] = useRecoilState(nextUserState);
  const [cancelButtonOpacity, setCancelButtonOpacity] = useState(1.0);
  const [changeUserButtonOpacity, setChangeUserButtonOpacity] = useState(1.0);
  const [iconColor, setIconColor] = useState('#414141');
  const ChevronIcon = showDropdown ? GoChevronUp : GoChevronDown;

  if (loading) return <LoadingOverlay data-testid="loading" />;
  if (error) return <ErrorOverlay data-testid="error" />;

  const onExitModal = () => {
    setShowModal(false);
    setShowDropdown(false);
    setNextUser(null);
  };

  return (
    <div
      style={styles.root}
      data-testid="change_user_modal"
      onClick={onExitModal}
    >
      <div
        style={styles.modal}
        onClick={event => {
          event.stopPropagation();
          setShowDropdown(false);
        }}
      >
        <h1>
          {currentUser
            ? `Logged in as ${currentUser.firstName} ${currentUser.lastName}`
            : 'Not Logged In'}
        </h1>
        <h4>Change User</h4>
        <div
          style={styles.dropdownButton}
          onClick={event => {
            event.stopPropagation();
            setShowDropdown(!showDropdown);
          }}
        >
          <div>
            {nextUser?.firstName} {nextUser?.lastName}
          </div>
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
        {showDropdown ? (
          <ChangeUserDropdown
            users={
              data
                ? data.userMany.map(({_id, firstName, lastName, email}) => {
                    return {id: _id, firstName, lastName, email} as User;
                  })
                : []
            }
            onSelect={user => {
              setShowDropdown(!showDropdown);
              setNextUser(user);
            }}
          />
        ) : null}
        <div style={styles.footer}>
          <div
            style={{...styles.cancelButton, opacity: cancelButtonOpacity}}
            onClick={onExitModal}
            onMouseEnter={() => setCancelButtonOpacity(0.8)}
            onMouseLeave={() => setCancelButtonOpacity(1.0)}
          >
            Cancel
          </div>
          <div
            style={{
              ...styles.changeUserButton,
              opacity: nextUser === null ? 0.5 : changeUserButtonOpacity,
            }}
            onMouseEnter={() =>
              nextUser !== null && setChangeUserButtonOpacity(0.8)
            }
            onMouseLeave={() =>
              nextUser !== null && setChangeUserButtonOpacity(1.0)
            }
            onClick={event => {
              event.stopPropagation();
              if (nextUser !== null) {
                setShowModal(false);
                setCurrentUser(nextUser);
                Logger.info(
                  'Switched user to ' +
                    nextUser?.firstName +
                    ' ' +
                    nextUser?.lastName
                );
                onExitModal();
              }
            }}
          >
            Change User
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeUserModal;
