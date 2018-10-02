import React from 'react';

export default class AboutProject extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            data: this.props.data
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        })
    }

    render() {
        return (
            <div className="container about-project">
                {
                    this.state.data.map((item, index) => {
                    
                        if (item.type == 'text') {
                            return (
                                <p key={index}>{item.data}</p>
                            )
                        } else if ( item.type == 'image' ) {
                            return (
                                <img style={{ marginBottom: "20px" }} key={index} src={item.data} className="img-fluid"/>
                            )
                        } else {
                            return (
                                <div style={{marginBottom: "20px"}} key={index} className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={item.data} allowfullscreen></iframe>
                                </div>
                            )
                        }

                    })
                }
            </div>
        );
    }

}