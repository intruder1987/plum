import { Component } from 'react';

export default class BaseComponent extends Component {
    clickToLinkHandler = (path) => {
        window.scrollTo(0, 0);
        this.props.pushPath(path);
    }
}