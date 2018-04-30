import React, { Component } from 'react';



class TopUserList extends Component {




  render(){
    return (
      <div>
        <h2 className="component-header">Most Active Users</h2>
        <table id="top-user-table">
        <thead className="table-header">
            <tr>
              <th className="first-col">Username</th>
              <th className="other-cols">Issues<br/>Reported</th>
              <th className="other-cols">Issues<br/>Completed</th>
              <th className="other-cols">Percent<br/>Completed</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.users.map(user => (
            <tr key={user.id} className="table-row">
              <td className="first-col">{user.username}</td>
              <td className="other-cols">{user.issues.length}</td>
              <td className="other-cols">{user.issues.filter(issue => {return issue.fixed === true}).length}</td>
              <td className="other-cols">{
                (isNaN((user.issues.filter(issue => {return issue.fixed === true}).length / user.issues.length * 100).toFixed(0))) ? '0%' : (user.issues.filter(issue => {return issue.fixed === true}).length / user.issues.length * 100).toFixed(0) + '%'
                }</td>
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TopUserList;
