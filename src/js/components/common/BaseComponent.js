import { Component } from 'react';

class BaseComponent extends Component {
    clickToLinkHandler = (path) => {
        window.scrollTo(0, 0);
        this.props.pushPath(path);
    }
}

export default BaseComponent;