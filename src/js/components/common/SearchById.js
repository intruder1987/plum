import React, { Component } from 'react';
import BaseComponent from './BaseComponent';
import TextInput from './forms/TextInput';

class SearchById extends BaseComponent {

    render() {
        return (
            <div className="search-container">
                <TextInput
                    className="search-by-id"
                    placeholder="Search by ID"
                />
                <div className="search-icon-container">
                    <div className="icon-search"></div>
                </div>
                <div className="popover">
                    <div className="text">
                        <div>For example:</div>
                        <div>RQ12345 or OR12345</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchById;