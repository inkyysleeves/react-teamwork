import React from 'react';
import { shallow } from 'enzyme';
import Profile from './profile';
import fetchGitHubProfile from '../services/fetchGitHubProfile';

jest.mock('../services/fetchGitHubProfile');
const MOCK_API_DATA = {
  repos: [{ name: 'jQuery' }],
  profile: {
    name: 'ersel',
    followers: 20,
  },
  contributions: {
    count: 2000,
  },
  events: {
    count: 1000,
  },
};
const MOCK_GITHUB_API = Promise.resolve(MOCK_API_DATA);
fetchGitHubProfile.mockImplementation(() => MOCK_GITHUB_API);

describe('Profile page', () => {
  it('should render', (done) => {
    const dummyRoute = {
      params: {
        username: 'ersel',
      },
    };
    const myProfile = shallow(<Profile match={dummyRoute} />);
    // wait for api to resolve then call jest done()
    MOCK_GITHUB_API.then(() => {
      expect(myProfile).toMatchSnapshot();
      done();
    });
  });
});
