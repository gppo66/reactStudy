import React from 'react';
import WithRouterSample from './WithRouterSample';

const profileData = {
  gppo66: {
    name: '박경훈',
    description: '거인',
  },
  homer: {
    name: 'homer simpson',
    description: 'cartoon character',
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample></WithRouterSample>
    </div>
  );
}

export default Profile;
