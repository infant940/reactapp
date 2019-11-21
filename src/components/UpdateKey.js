import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './AddMeetup.css';



class UpdateKey extends Component{
    constructor(props){
        super(props);
        this.state={
          title: 'React Simple App',
          act: 0,
          index: '',
          datas: []
        }
      } 
    
      componentDidMount(){
        this.refs.name.focus();
      }
    
      fSubmit = (e) =>{
        e.preventDefault();
        console.log('try');
    
        let datas = this.state.datas;
        let name = this.refs.name.value;
    
        if(this.state.act === 0){   //new
          let data = {
            name
          }
          datas.push(data);
        }else{                      //update
          let index = this.state.index;
          datas[index].name = name;
        }    
    
        this.setState({
          datas: datas,
          act: 0
        });
    
        this.refs.myForm.reset();
        this.refs.name.focus();
      }
    
     
    
      fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
    
        this.setState({
          act: 1,
          index: i
        });
    
        this.refs.name.focus();
      }  
  render(){
    let datas = this.state.datas;

    return (

     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>UPDATE APPKEY</h1>
       <form ref="myForm" className="myForm">
          <input type="REMOVE KEY" ref="name" placeholder="UPDATE KEY" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}
              <button onClick={()=>this.fEdit(i)} className="myListButton">UPDATE </button>
              
            </li>
          )}
        </pre>
      </div>
    )
  }
}

export default UpdateKey;