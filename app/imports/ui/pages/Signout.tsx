import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import { Header } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  public render() {
    Meteor.logout();
    return (
      <Header as="h2" textAlign="center">
        <p>You are signed out.</p>
      </Header>
    );
  }
}