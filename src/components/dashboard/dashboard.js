import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssue, fetchIssues, updateIssue } from '../reducers/issues';
import { fetchUser, fetchUsers } from '../reducers/users';
import styled from 'styled-components';

import Map from './map';
import PieChartComponent from './piechart';
import BarGraph from './bargraph';
import TopUserList from './topuserlist';
import { Loader } from '../common/Loader';

const MainViewer = styled.div`
  background-image: url('http://idolza.com/a/f/h/home-design-pastel-colors-background-building-designers-black-and-white-brick-wall-breakfast-nook-gym_lamp-designers_restaurant-exterior-design-small-bathroom-shower-sofa-moder.jpg');
  font-family: 'PT Sans';
`;

class Dashboard extends Component {
  state = {
    status: 'REQUEST',
    message: 'Loading Data...',
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { fetchIssues, fetchUsers } = this.props;
    Promise.all([fetchIssues(), fetchUsers()])
      .then(() => this.setState({ status: 'SUCCESS', message: '' }))
      .catch(() =>
        this.setState({ status: 'ERROR', message: 'THERE WAS AN ERROR' })
      );
  };

  render() {
    const { issues, users } = this.props;
    const { status, message } = this.state;
    return status !== 'SUCCESS' ? (
      <Loader status={status} message={message} />
    ) : (
      <div>
        {' '}
        <MainViewer>
          <div id="console-top-row">
            <Map issues={issues} />
            <PieChartComponent issues={issues} />
          </div>
          <div id="console-bottom-row">
            <BarGraph issues={issues} />
            <TopUserList users={users} />
          </div>
        </MainViewer>
        )
      </div>
    );
  }
}

const mapState = state => ({
  issues: state.issues,
  users: state.users,
});

const mapDispatch = dispatch => {
  return {
    fetchIssues: () => dispatch(fetchIssues()),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapState, mapDispatch)(Dashboard);
