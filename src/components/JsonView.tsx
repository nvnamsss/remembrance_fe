import React, { useState, useEffect } from 'react'
import ReactJson from 'react-json-view'


class JsonView extends React.Component<any, any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <ReactJson src={this.props.data} />
            </>
        )
    }
}

export default JsonView;