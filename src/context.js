import React, { Component } from 'react';

import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_WORD':
            return {
                ...state,
                words: state.words.filter(word => word._id !== action.payload)
            };
        case 'ADD_WORD':
            return {
                ...state,
                words: [
                    ...state.words,
                    action.payload]
            };
        default:
            return state;
    }
}

export class Provider extends Component {

    state = {
        words: [],

        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount() {
        axios.get("http://192.168.29.232:5000/api/words/test")
            .then(res => this.setState({ words: res.data["wordItems"] }))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;