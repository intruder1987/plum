import React, { PropTypes, Component } from "react";
import ReactDOM from "react-dom";

class Popup extends Component {

    render() {
        return (<noscript></noscript>);
    }

    componentDidMount() {
        this.renderPopup();
    }

    componentDidUpdate() {
        this.renderPopup();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
    }

    renderPopup() {

        const { isOpen, children } = this.props;

        if (!this.popup) {
            this.popup = document.createElement("div");
            document.body.appendChild(this.popup);
        }

        ReactDOM.render(
            <div className={isOpen ? 'popup-overlay open' : 'popup-overlay'}>
                <div className="popup-content">
                    {children}
                </div>
            </div>,
            this.popup);
    }
}

Popup.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node
};

export default Popup;