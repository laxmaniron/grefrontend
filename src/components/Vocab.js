import React, { Component,Fragment } from 'react'
import {Consumer} from "../context"

import axios from "axios";



class Vocab extends Component {

    onDeleteClick =  (_id,dispatch) => {

        axios.post("http://localhost:5000/api/words/deleteword",{_id:_id}).
        then(
            dispatch({type:"DELETE_WORD",payload:_id})
        );

        
    };
    render() {

        const {_id,wordname, typeofvocab, word_meaning,word_mnemonic,word_example,origin_of_word } = this.props.word;

        // console.log(typeofvocab)

        let types= ""

        for (var i=0;i<typeofvocab.length;i+=1){
            if (i == 0){
                types += typeofvocab[i]
            }
            else{
                types += ", "+typeofvocab[i]
            }

        }

        const examples = word_example.map((example,index) =>
        <Fragment key={index}><b>Example:&nbsp;&nbsp;</b>{example}<br/></Fragment> 
      );

      const meanings = word_meaning.map((meaning,index) =>
        <Fragment key={index}><h5>Meaning:&nbsp;&nbsp;{meaning}</h5></Fragment> 
      );

        return(

            <Consumer>
                {value=>{
                    
                    const {dispatch}= value;
                    return (
            <div className="card card-body mb-3 ">

                <h4><span style={{color:"#563d7c" }}>{this.props.ind+1})&nbsp;{wordname.charAt(0).toUpperCase() + wordname.slice(1)} ({types}) </span> 
                {/* onClick={this.onDeleteClick.bind(this,_id,dispatch)}*/ }
                <i className="fas fa-times" style={{cursor:'pointer',float:'right',color:'red'}} /> </h4> 
                <ul className="list-group">
                    <li className="list-group-item" >{meanings}</li>
                    <li className="list-group-item" ><b>Mnemonic:</b>&nbsp;&nbsp;{word_mnemonic}</li>
                    <li className="list-group-item" >{examples}</li>
                    
                </ul>
            </div>
        )
                }}
            </Consumer>

        );
        
    }
}

export default Vocab