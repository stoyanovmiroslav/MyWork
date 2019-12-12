import React, { Component} from 'react';
import { FacebookProvider, Like } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="573350956442278">
        <Like href="https://www.facebook.com/Mywork-104060094427034" colorScheme="dark" showFaces share />
      </FacebookProvider>
    );
  }
}