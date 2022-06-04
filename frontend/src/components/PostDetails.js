import React, {Component} from 'react';
import axios from 'axios';

export default class PostDetails extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          post:{}
        };
    
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }

    render() {
        const {firstName,lastName,email,nic,phone,reserchInterest} = this.state.post;
        return (
            <div style={{marginTop:'20px'}}>
                <h4>{firstName}</h4>
                <hr/>
                <dl className='row'>
                    <dt className='col-sm-3'>LastName</dt>
                    <dd className='col-sm-9'>{lastName}</dd>

                    <dt className='col-sm-3'>Email</dt>
                    <dd className='col-sm-9'>{email}</dd>

                    <dt className='col-sm-3'>Nic</dt>
                    <dd className='col-sm-9'>{nic}</dd>

                    <dt className='col-sm-3'>Phone</dt>
                    <dd className='col-sm-9'>{phone}</dd>

                    <dt className='col-sm-3'>ReserchInterest</dt>
                    <dd className='col-sm-9'>{reserchInterest}</dd>
                
                </dl>
            </div>
        );
    }
}