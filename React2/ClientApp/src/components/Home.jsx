import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>First App With React</h1>
        <p>22/11/2021 Update: Project is under maintenance. Migrating SQL sever to Azure</p>
        <p> built by Dmitrii Kotov with:</p>
        <ul>
          <li><a href='https://docs.google.com/document/d/1u3Sm2yPAmOs3NnjpsWq92TO20-bgoGZTYk-Khhom7Cw/edit'> Task Link</a></li>
          <li><a href='https://github.com/KotovD/React2'> Source Code on GitHub</a></li>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='https://react.semantic-ui.com/'>Sematic UI</a> for layout and styling</li>
        </ul>
      </div>
    );
  }
}
