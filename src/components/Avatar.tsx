import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

class Avatar extends React.Component {
    render() {
        return (
            <img className="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Default avatar"></img>
        );
    }
}