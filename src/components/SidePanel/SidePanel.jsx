import React, { Component } from 'react';
let __html = require('../SidePanel/sidePanel.html');
let template = { __html: __html};

class SidePanel extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={template}>
                
            </div>
        );
    }
}

export default SidePanel;