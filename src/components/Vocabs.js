import React, { Component, Fragment } from 'react'
import Vocab from './Vocab';

import {Consumer} from "../context"

import {Link} from 'react-router-dom'

class Vocabs extends Component {
    // state = {}

    state={
     "letters": {"A":false,
      "B":false,
      "C":false,
      "D":false,
      "E":false,
      "F":false,
      "G":false,
      "H":false,
      "I":false,
      "J":false,
      "K":false,
      "L":false,
      "M":false,
      "N":false,
      "O":false,
      "P":false,
      "Q":false,
      "R":false,
      "S":false,
      "T":false,
      "U":false,
      "V":false,
      "W":false,
      "X":false,
      "Y":false,
      "Z":false},

      "all_origins":{
        "Magoosh_GRE_High_frequency_list":false,
        "My_GRE_list":false,
        "Baron_Normal_List":false,
        "Baron_Important_List":false,
        "Baron_ASLH":false

      }

      

    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "instant" });
      }
      
      doLetterFilter = e => {
        
        let p = false;
        if (this.state.letters[e.target.name] == false) {
          p = true;
        } else if (this.state.letters[e.target.name]  == true) {
          p = false;
        }

        this.state.letters[e.target.name]=p
        
        this.setState({ letters : this.state.letters });
      };

      doOriginFilter = e => {
        
        let p = false;
        if (this.state.all_origins[e.target.name] == false) {
          p = true;
        } else if (this.state.all_origins[e.target.name]  == true) {
          p = false;
        }

        console.log(e.target.name)
        
        this.state.all_origins[e.target.name]=p
        
        this.setState({ all_origins : this.state.all_origins });
      };
    

    render() {

        

       

        let all_origins = Object.keys(this.state.all_origins)

        
        let active_origins=[]

        

        for (var i = 0;i<all_origins.length;i+=1){
          if (this.state.all_origins[all_origins[i]]){
            active_origins.push(all_origins[i])
          }
        }

        // console.log(active_letters)

        // console.log(this.state.letters["A"])

       return(     
        <Consumer>

            {value=>{
                const {words} = value;

                let all_letters = Object.keys(this.state.letters)

                let active_letters=[]

              for (var i = 0;i<all_letters.length;i+=1){
               
                  if (this.state.letters[all_letters[i]] == true){
                  active_letters.push(all_letters[i])
                    }
              }

              let all_origins = Object.keys(this.state.all_origins)

        
              let active_origins=[]

        

              for (var i = 0;i<all_origins.length;i+=1){
                if (this.state.all_origins[all_origins[i]]){
                  active_origins.push(all_origins[i])
                }
              }

               

                
                var mywords = []

                if (active_letters.length == 0 && active_origins.length == 0 ){
                    mywords=words
                }

                else if(active_letters.length == 0 && active_origins.length != 0) {

                  for (var i=0 ; i<= words.length;i+=1){

                          if (words[i] !== undefined){

                            let wordorigin1=words[i]["origin_of_word"]
                            if(active_origins.includes(wordorigin1)){
                              mywords.push(words[i])
                            }

                          }
                            
                          }

                }
                
                else if (active_letters.length != 0 && active_origins.length == 0 ) {
                  
                  
                    
                  for (var i=0 ; i<= words.length;i+=1){

                    if (words[i] !== undefined){

                      let wordnamer1=words[i]["wordname"]
                      if(active_letters.includes(wordnamer1[0].toUpperCase())){
                        mywords.push(words[i])
                      }

                    }
                      
                  }
                  
                }

              else{

                for (var i=0 ; i<= words.length;i+=1){

                      if (words[i] !== undefined){

                        let wordnamer1=words[i]["wordname"]
                        let wordorigin1=words[i]["origin_of_word"]
                        if(active_letters.includes(wordnamer1[0].toUpperCase()) && active_origins.includes(wordorigin1)){
                          mywords.push(words[i])
                        }

                      }
                        
                      }

              }
                

               
                
               
                return(

                  <Fragment>

                  <div className="row">

                  <div className="col-12 col-lg-2 col-md-2 box">

                   <h2>
                        <p style={{color:"#563d7c" }} className="pl-5">Origin </p>
                    </h2>

                    <ul className="list-group pl-5">
                    <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "Magoosh_GRE_High_frequency_list"
                          value={this.state["all_origins"]["Magoosh_GRE_High_frequency_list"]}
                          onChange={this.doOriginFilter}
                        /> 
                        &nbsp;Magoosh GRE High frequency list</li>
                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "My_GRE_list"
                          value={this.state["all_origins"]["My_GRE_list"]}
                          onChange={this.doOriginFilter}
                          
                        /> 
                        &nbsp;My GRE list</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "Baron_Normal_List"
                          value={this.state["all_origins"]["Baron_Normal_List"]}
                          onChange={this.doOriginFilter}
                          //{/* checked = {true} */}
                        /> 
                        &nbsp;Baron Normal List</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "Baron_Important_List"
                          value={this.state["all_origins"]["Baron_Important_List"]}
                          onChange={this.doOriginFilter}
                          //{/* checked = {true} */}
                        /> 
                        &nbsp;Baron Important List</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "Baron_ASLH"
                          value={this.state["all_origins"]["Baron_ASLH"]}
                          onChange={this.doOriginFilter}
                        /> 
                        &nbsp;Baron Trivia</li>
                    
                    </ul>
                    
                    
                   

                  </div>

                  
                 <div className="col-12 col-lg-8 col-md-8 box">
                  <div className="container">

                    
                    
                    <h1 className="display-4" onClick={this.scrollToBottom} style={{cursor:"pointer"}}>
                        <span style={{color:"#563d7c" }}>Word </span> List 
                    </h1>
                  
                    
                     {mywords.map( (word,index) => (
                   <Vocab key={word._id} word={word} ind={index} 
                 ></Vocab>
                
   
                 ))}
               
                
                 <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }} >
               </div>
             
      
               </div>

               </div>

               <div className="col-12 col-lg-2 col-md-2 box">

               <h2>
                    <p style={{color:"#563d7c" }} className="pr-5">Letters </p>
                    </h2>

                    <ul className="list-group pr-5">
                    <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "A"
                          value={this.state["letters"]["A"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;A</li>
                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "B"
                          value={this.state["letters"]["B"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;B</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "C"
                          value={this.state["letters"]["C"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;C</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "D"
                          value={this.state["letters"]["D"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;D</li>
                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "E"
                          value={this.state["letters"]["E"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;E</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "F"
                          value={this.state["letters"]["F"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;F</li><li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "G"
                          value={this.state["letters"]["G"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;G</li>
                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "H"
                          value={this.state["letters"]["H"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;H</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "I"
                          value={this.state["letters"]["I"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;I</li><li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "J"
                          value={this.state["letters"]["J"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;J</li>
                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "K"
                          value={this.state["letters"]["K"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;K</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "L"
                          value={this.state["letters"]["L"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;L</li><li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "M"
                          value={this.state["letters"]["M"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;M</li>
                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "N"
                          value={this.state["letters"]["N"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;N</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "O"
                          value={this.state["letters"]["O"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;O</li><li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "P"
                          value={this.state["letters"]["P"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;P</li>
                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "Q"
                          value={this.state["letters"]["Q"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;Q</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "R"
                          value={this.state["letters"]["R"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;R</li><li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "S"
                          value={this.state["letters"]["S"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;S</li>
                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "T"
                          value={this.state["letters"]["T"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;T</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "U"
                          value={this.state["letters"]["U"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;U</li><li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "V"
                          value={this.state["letters"]["V"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;V</li>
                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "W"
                          value={this.state["letters"]["W"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;W</li>

                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "X"
                          value={this.state["letters"]["X"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;X</li><li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "Y"
                          value={this.state["letters"]["Y"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;Y</li>
                        <li className="list-group-item" >
                     <input
                          type="checkbox"
                          name= "Z"
                          value={this.state["letters"]["Z"]}
                          onChange={this.doLetterFilter}
                        /> 
                        &nbsp;Z</li>

                    
                    </ul>

               </div>

               </div>

              </Fragment>
            );
            }}
            
        </Consumer>
       
       );

      
   
    }
}

export default Vocabs 

