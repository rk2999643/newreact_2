import React, { Component } from "react";

class ClassComponent extends Component {
    state = {
        Name : ' ',
        Dept : ' ',
        Rating : ' ',
        EmpData :[]
    }
    changeHandle = (event) => {
        this.setState({[event.target.name] : event.target.value})
        // console.log(this.state.Name);
        // console.log(this.state.Dept);


    }
    clickHandle = (e) =>{
        e.preventDefault();
        const newObj = {
            name : this.state.Name,
            dept : this.state.Dept,
            rating : this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({EmpData : this.state.EmpData})
        // console.log(this.state.EmpData);
         this.setState({Name :"" })
         this.setState({Dept :"" })
         this.setState({Rating :"" })
        // this.state.Dept=' '
    }
    render(){
        return(
            <>
               <form>
               <label htmlFor="name" className="Lname">Name</label>
               <input id="name" type="text" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.changeHandle}  required/>
                <br/>

               <label htmlFor="dept" className="Ldept">Department</label>
               <input id="dept" type="text" placeholder="Enter Department" name="Dept" value={this.state.Dept} onChange={this.changeHandle}  required/>
               <br/>
                
               <label htmlFor="rating" className="Lrating">Rating</label>
               <input id="rating" type="text" placeholder="Enter Rating" name="Rating" value={this.state.Rating} onChange={this.changeHandle}  required/>
               <br/>
                 
               <button type="button" onClick={this.clickHandle} className="">Submit</button>
               </form>
               <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             <div className="result">
              {this.state.EmpData.map((item,index) => {
                return(
                    <div>
                        <span className="Fresult">Name : {item.name} || Dept : {item.dept} || Rating : {item.rating}</span>
                    </div>
                      )
               })}
             </div>

            </>
        )
    }
}
export default ClassComponent;