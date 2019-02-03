import React, { Component } from 'react';
import { ListClient } from './actions/ClientAction';
// import { AddLogin, ListLogin } from './actions/LoginAction';
import {store} from './store/userstore';
class User extends Component {
constructor(props)
	{
		super(props);
    this.state = {ClientList:[{id:1}],client:{}, empdata:[]};
    
    this.state.firstTimelist=true;
    this.state.EditButton=false;
    this.state.id=false;
    this.state.ButtonName='Submit';
  
   
    this.LoadData = this.LoadData.bind(this);
    
    this.searchHandler=this.searchHandler.bind(this);

    this.LoadData();
  } 
  

  LoadData()
  { 
    store.dispatch(ListClient());
    let tempData =store.getState();
    tempData.datalist.then(clientData=>{
    var A=[];
    A.push(clientData);
    this.setState({ClientList:A});
    this.setState({empdata:A});
   })
   
  }


  searchHandler(event){
    let txt= event.target.value; 
    this.setState({txt:txt});
    let { empdata } =this.state;
    empdata=this.state.ClientList.filter((row)=>{
         return row.clientname.match(txt);        
    });
    this.setState({empdata:empdata});    
  }

  

  render() {
    console.log('Component render');
    let {term}=this.state;	
    {this.state.empdata}
    return (
        <div>
         <div className="row"> 
          <div className="col-md-12"> 
            <h1>User List </h1>
            	<div>
              	<table className='table table-striped'> 
                <tbody>
                 <form>
                 <input type="text" name="name" />
                   <input width="300" type="text" onChange={this.searchHandler} value={term}/>
                </form> 
                  
                 {
                     this.state.empdata.map((row,idx)=>{
                      return <tr key={idx}>
                        <td>
                           <img src={row.Poster}  alt={row.Writer}/>
                            <span> <br/> {row.Title}</span>
                            <span> <br/> {row.Year}</span>
                            <span> <br/> {row.Rated}</span>
                            <span> <br/> {row.Released}</span>
                            <span> <br/> {row.Runtime}</span>
                            <span> <br/> {row.Genre}</span>
                            <span> <br/> {row.Director}</span>                          
                        </td>
                        <td>
                           <img src={row.Poster}  alt={row.Writer}/>
                            <span> <br/> {row.Title}</span>
                            <span> <br/> {row.Year}</span>
                            <span> <br/> {row.Rated}</span>
                            <span> <br/> {row.Released}</span>
                            <span> <br/> {row.Runtime}</span>
                            <span> <br/> {row.Genre}</span>
                            <span> <br/> {row.Director}</span>                          
                        </td>
                        <td>
                           <img src={row.Poster}  alt={row.Writer}/>
                            <span> <br/> {row.Title}</span>
                            <span> <br/> {row.Year}</span>
                            <span> <br/> {row.Rated}</span>
                            <span> <br/> {row.Released}</span>
                            <span> <br/> {row.Runtime}</span>
                            <span> <br/> {row.Genre}</span>
                            <span> <br/> {row.Director}</span>                          
                        </td>                 
                        </tr>
                  })}
                
                </tbody>
                </table>
            	</div>
          </div>
          </div>

           
          </div>
    );
  }
}

export default User;
