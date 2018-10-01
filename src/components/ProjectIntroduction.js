import React from 'react';

export default class ProyectIntroduction extends React.Component {

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
            <div className="project-introduction">

                <div className="my-container">
                    <div className="introduction">
                        <div>
                            <img src={this.state.data.image}></img>
                        </div>
                        <div>
                            <h1>{this.state.data.title}</h1>
                            <p>
                                {this.state.data.introduction}
                                {
                                    this.state.data.link && 
                                    <a target="_blank" href={this.state.data.link}>
                                        {this.state.data.linkLabel}
                                    </a>
                                }
                                .
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

ProyectIntroduction.defaultProps = {
    title: '',
    introduction: '',
    image: '',
}