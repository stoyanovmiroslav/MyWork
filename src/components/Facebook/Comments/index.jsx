import React, { Component} from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="573350956442278">
        <Comments href="https://xeoncomputers.azurewebsites.net/" />
      </FacebookProvider>
    );
  }
}