import React, { Component } from 'react';
import axios from 'axios';

export default class schemeDetails extends Component {

  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }
  
  componentDidMount(){
    const id= this.props.match.params.id;

    axios.get(`http://localhost:8070/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }


  render() {

    const {criteria,description,distribution} = this.state.post;
    return (
      
      <section id="content" className="py-5">
        <div className="container">
            <div className='col'>
            <h3>Scheme Details</h3>
            
            <dl className="row mt-4">
              <dt className="col-sm-3">Criteria</dt>
              <dd className="col-sm-9">{criteria}</dd>

              <dt className="col-sm-3">Description</dt>
              <dd className="col-sm-9">{description}</dd>

              <dt className="col-sm-3">Distribution</dt>
              <dd className="col-sm-9">{distribution}</dd>
            </dl>
          </div>
        </div>
      </section>      
    )
  }
}
