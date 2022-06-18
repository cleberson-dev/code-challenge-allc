import {MockedProvider} from '@apollo/client/testing';
import {RecoilRoot} from 'recoil';
import {render} from '@testing-library/react';
import React from 'react';

import {currentUserState, nextUserState} from '../atoms/UserState';
import {RecoilObserver} from '../components/RecoilObserver';
import {showDropdownState} from '../atoms/ChangeUserDropdownState';
import {showModalState} from '../atoms/ChangeUserModalState';
import {showSettingsMenuState} from '../atoms/SettingsMenuState';
import ChangeUserModal, {GET_USERS} from '../components/ChangeUserModal';

const mocks = [
  {
    request: {
      query: GET_USERS,
      variables: {
        limit: 100,
      },
    },
    result: {
      data: {
        userMany: [
          {
            _id: '1',
            firstName: 'Buck',
            lastName: 'bulldog',
            email: 'buck@bulldog.com',
          },
        ],
      },
    },
  },
];

it('renders without error', async () => {
  const onChange = jest.fn();
  const {getByTestId, findByText} = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <RecoilRoot>
        <RecoilObserver node={showModalState} onChange={onChange} />
        <RecoilObserver node={showDropdownState} onChange={onChange} />
        <RecoilObserver node={showSettingsMenuState} onChange={onChange} />
        <RecoilObserver node={currentUserState} onChange={onChange} />
        <RecoilObserver node={nextUserState} onChange={onChange} />
        <RecoilObserver node={showModalState} onChange={onChange} />
        <ChangeUserModal />
      </RecoilRoot>
    </MockedProvider>
  );

  expect(getByTestId('loading')).toBeInTheDocument();
  expect(await findByText(/Logged in as/i)).toBeInTheDocument();
});
