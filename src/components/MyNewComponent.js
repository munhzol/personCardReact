import React, { Component } from 'react';

class MyNewComponent extends Component {
    render(){

        const { someText, firstName, lastName , age} = this.props;

        return(
            <div>
                We are in my new Component {someText}
                <p>
                    My name is {firstName} {lastName}, my age is {age}
                </p>
            </div>
        );
    }
}

export default MyNewComponent;