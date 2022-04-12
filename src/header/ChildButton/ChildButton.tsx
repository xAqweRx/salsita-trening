import React, {Component} from "react";

class ChildButton extends Component<{ model: { [key: string]: any } }> {
    render() {
        return (
            <button onClick={() => this.props.model.setFirstName('Dave')}>
                Change name from {this.props.model.firstName} to Dave
            </button>
        )
    }
}

export default ChildButton;