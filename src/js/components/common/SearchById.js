import React, { Component } from 'react';
import BaseComponent from './Base';
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
            </div>
        );
    }

}

export default SearchById;