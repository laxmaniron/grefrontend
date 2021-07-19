import React, { Component } from 'react'
import {Consumer} from "../context"

import {v1 as uuid} from "uuid";

import axios from 'axios';

class AddWord extends Component {

    state={
        
            wordname: "",
            typeofvocab:"",
            word_meaning:"",
            word_mnemonic:"",
            word_example:"",
            origin_of_word:"",
            errors:{},
            success_message:0
        
    }

    onChange = e => this.setState({[e.target.name]:e.target.value})

    clear_states = () => {

        this.setState({
            wordname: "",
            // typeofvocab:"",
            word_meaning:"",
            word_mnemonic:"",
            word_example:"",
            // origin_of_word:"Baron_Normal_List",
            errors:{},
            success_message:0
        })

    }

    onSubmit =(dispatch, e) =>{
        e.preventDefault();
        console.log(this.state);

        const {wordname,typeofvocab,word_meaning,word_mnemonic,word_example,origin_of_word}= this.state

        //check  for errors

        if (wordname == ""){
            this.setState({errors:{wordname:"Word Name is required"}});
            // return
        }

        if (typeofvocab == ""){
            this.setState({errors:{typeofvocab:"typeofvocab Name is required"}});
            // return;
        }

        if (word_meaning == ""){
            this.setState({errors:{word_meaning:"word_meaning Name is required"}});
            // return;
        }

        if (word_mnemonic == ""){
            this.setState({errors:{word_mnemonic:"word_mnemonic Name is required"}})
            // return;
        }

        if (word_example == ""){
            this.setState({errors:{word_example:"word_example Name is required"}});
            // return;
        }

        if (origin_of_word == ""){
            this.setState({errors:{origin_of_word:"origin_of_word Name is required"}});
            // return;
        }

        const newWord={
            
            wordname,
            typeofvocab:[typeofvocab],
            word_meaning:[word_meaning],
            word_mnemonic,
            word_example:[word_example],
            origin_of_word
        }

        if (wordname !== "" && typeofvocab !== "" && word_meaning !== "" && word_mnemonic !== "" && word_example !== "" && origin_of_word !== "" ){
            this.setState({success_message:1})

           
        }
        else{
            
            return;
        }

        console.log(this.state.success_message)

        axios.post("http://localhost:5000/api/words/addword",newWord)
        .then(res => dispatch ({type:"ADD_WORD",
        payload:newWord}) )
       

       

        // this.props.history.push("/");

        window.setTimeout(this.clear_states, 2500);

    }






    render() {

        const {wordname,typeofvocab,word_meaning,word_mnemonic,word_example,origin_of_word,errors,success_message}= this.state

        return(
            <Consumer>
                {value  => {
                    const {dispatch}=value;
                    return (
            <div className="container">
            <div className= "card mb-3">
            <div className="card-header">Add Word {success_message?(<span style={{color:"green"}}>&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Successfully Added  {wordname} <i className="fas fa-check" style={{color:'green'}} /></b></span>):(<span></span>)}</div>
            <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                    <div className="form-group">
                         
                        <label htmlFor="name"  style={{width:"100%" ,color:"#563d7c"}}  className="mb-1" >
                            <b  >  Word Name </b>
                            
                            <input  
                            type= "text"
                            name="wordname"
                            className="form-control form-control-lg"
                            placeholder="Enter Word ..."
                            value={wordname}
                            onChange={this.onChange}
                            error={errors.wordname}
                            >
                            </input>

                        </label>
                       
                    </div>

                    

                    <div className="form-group">
                        
                        <div className="mb-2" style={{width:"100%" ,color:"#563d7c"}} > <b>Type of word </b> </div>

                        <label htmlFor="noun" className="radio-inline">
                         <input type="radio" onChange={this.onChange} value="noun" name="typeofvocab" style={{backgroundColor: "#563d7c"}}/> &nbsp; Noun &nbsp; &nbsp;
                         </label>

                         <label htmlFor="verb" className="radio-inline">
                         <input type="radio" onChange={this.onChange} value="verb" name="typeofvocab" style={{backgroundColor: "#563d7c"}} /> &nbsp; Verb &nbsp; &nbsp;
                         </label>
                         
                         <label htmlFor="adjective" className="radio-inline">
                         <input type="radio" onChange={this.onChange} value="adjective" name="typeofvocab" style={{backgroundColor: "#563d7c"}}/> &nbsp; Adjective &nbsp; &nbsp;
                         </label>

                         <label htmlFor="adverb" className="radio-inline">
                         <input type="radio" onChange={this.onChange} value="adverb" name="typeofvocab" style={{backgroundColor: "#563d7c"}}/> &nbsp; Adverb &nbsp; &nbsp;
                         </label>

                    </div>

                    <div className="form-group">
                        <label htmlFor="word_meaning" style={{width:"100%" ,color:"#563d7c"}} className="mb-1">
                            <b>Meaning</b>
                            <input  
                            type= "text"
                            name="word_meaning"
                            className="form-control form-control-lg"
                            placeholder="Enter Word ..."
                            value={word_meaning}
                            onChange={this.onChange}
                            error={errors.word_meaning}
                            >
                            </input>

                        </label>

                    </div>

                    

                    <div className="form-group">
                        <label htmlFor="word_example" style={{width:"100%" ,color:"#563d7c"}} className="mb-1">
                            <b>Example</b>
                            <input  
                            type= "text"
                            name="word_example"
                            className="form-control form-control-lg"
                            placeholder="Enter Word ..."
                            value={word_example}
                            onChange={this.onChange}
                            error={errors.word_example}
                            >
                            </input>

                        </label>

                    </div>

                    <div className="form-group">
                        <label htmlFor="word_mnemonic" style={{width:"100%" ,color:"#563d7c"}} className="mb-1">
                            <b>Mnemonic</b>
                            <input  
                            type= "text"
                            name="word_mnemonic"
                            className="form-control form-control-lg"
                            placeholder="Enter Word ..."
                            value={word_mnemonic}
                            onChange={this.onChange}
                            error={errors.word_mnemonic}
                            >
                            </input>

                        </label>

                    </div>

                    <div className="form-group">
                        
                        <div className="mb-2" style={{color:"#563d7c"}}> <b>Origin</b> </div>

                        <label htmlFor="Magoosh_GRE_High_frequency_list" className="radio-inline" >
                         <span><input onChange={this.onChange} value="Magoosh_GRE_High_frequency_list" type="radio" name="origin_of_word"  /></span> &nbsp; Magoosh_GRE_High_frequency_list &nbsp; &nbsp;
                         </label>

                         <label htmlFor="Baron_Normal_List" className="radio-inline" >
                         <span><input onChange={this.onChange} value="Baron_Normal_List" type="radio" name="origin_of_word"  /></span> &nbsp; Baron Normal List &nbsp; &nbsp;
                         </label>

                         <label htmlFor="Baron_Important_List" className="radio-inline" >
                         <span><input onChange={this.onChange} value="Baron_Important_List" type="radio" name="origin_of_word"  /></span> &nbsp; Baron Important List &nbsp; &nbsp;
                         </label>

                         <label htmlFor="Baron_ASLH" className="radio-inline" >
                         <span><input onChange={this.onChange} value="Baron_ASLH" type="radio" name="origin_of_word"  /></span> &nbsp; Baron trivia &nbsp; &nbsp;
                         </label>
                         

                    </div>

                   <input type= "submit" value="Add Word" className="btn btn-light btn-block" />
                </form>
            </div>                
            </div>
         </div>
        )

                }}
            </Consumer>
        )
       
    }
}

export default AddWord