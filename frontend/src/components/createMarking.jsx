import React, { Component } from 'react'
import axios from 'axios';

export default class createMarking extends Component {
constructor(props){
  super(props);
  this.state={
    criteria:"",
    description:"",
    distribution:""
  }
}

handleInputChange=(e)=>{
  const{name,value} = e.target;

  this.setState({
    ...this.state,
    [name]:value
  })
}

onSubmit=(e)=>{
  e.preventDefault();

  const {criteria,description,distribution} = this.state;

  const data = {
    criteria:criteria,
    description:description,
    distribution:distribution
  }

  console.log(data)

  axios.post('http://localhost:8070/createMarking',data).then((res)=>{
    if(res.data.success){
      this.setState({
        criteria:"",
        description:"",
        distribution:""
      })
    }
  })

}

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create New Marking Scheme</h1>
          <form className="needs-validation" noValidate>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBotttom:'5px'}}> Criteria</label>
              <input type="text"
              className="form-control"
              name="criteria"
              placeholder="Enter Criteria"
              value={this.state.criteria}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBotttom:'5px'}}> Description</label>
              <input type="text"
              className="form-control"
              name="description"
              placeholder="Enter Description"
              value={this.state.description}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBotttom:'5px'}}> Distribution</label>
              <input type="text"
              className="form-control"
              name="distribution"
              placeholder="Enter Distribution"
              value={this.state.distribution}
              onChange={this.handleInputChange}/>
            </div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp;Save
            </button>

          </form>


      </div>
    )
  }
}
