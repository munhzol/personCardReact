import React, { Component } from 'react';


class PersonCard extends Component {
    render(){
        const { className, firstName, lastName, age, hairColor } = this.props;
        return(
            <div className={className}>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;