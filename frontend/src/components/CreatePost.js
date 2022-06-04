import React, {Component} from 'react';
import axios from 'axios';

export default class CreatePost extends Component {

    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            nic:"",
            phone:"",
            reserchInterest:""
        }
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {firstName,lastName,email,nic,phone,reserchInterest} = this.state;

        const data = {
            firstName:firstName,
            lastName:lastName,
            email:email,
            nic:nic,
            phone:phone,
            reserchInterest:reserchInterest
        }

        console.log(data)

        axios.post("/post/save",data).then((res) => {
            if(res.data.success){
                this.setState(
                    {
                        firstName:"",
                        lastName:"",
                        email:"",
                        nic:"",
                        phone:"",
                        reserchInterest:""
                    }
                )
            }
        })
    }

    render() {
        return (
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'>Add New Staff</h1>
                <form className='need-validation' noValidate>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >FirstName</label>
                        <input type='text'
                        className='form-control'
                        name='firstname'
                        placeholder='Enter First Name'
                        value={this.state.firstName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >LastName</label>
                        <input type='text'
                        className='form-control'
                        name='lastName'
                        placeholder='Enter Last Name'
                        value={this.state.lastName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Email</label>
                        <input type='text'
                        className='form-control'
                        name='email'
                        placeholder='Enter Email'
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >NIC</label>
                        <input type='text'
                        className='form-control'
                        name='nic'
                        placeholder='Enter Nic'
                        value={this.state.nic}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Phone</label>
                        <input type='text'
                        className='form-control'
                        name='phone'
                        placeholder='Enter Phone'
                        value={this.state.phone}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Research Interest</label>
                        <input type='text'
                        className='form-control'
                        name='researchInterest'
                        placeholder='Enter Research Interest'
                        value={this.state.reserchInterest}
                        onChange={this.handleInputChange}/>
                    </div>
                    
                    <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className='far fa-check-square'></i>
                        &nbsp; save
                    </button>
                </form>
            </div>
        );
    }
}

