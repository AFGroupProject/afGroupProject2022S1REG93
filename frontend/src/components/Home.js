import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts:[]
    };

  }


componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:9000/posts").then(res => {
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts)
    }
  });
}

onDelete = (id) =>{
  axios.delete(`/post/delete/${id}`).then((res) =>{
    alert("Delete successfully");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){
  const result = posts.filter((post) =>
  post.firstName.toLowerCase().includes(searchKey)||
  post.lastName.toLowerCase().includes(searchKey)||
  post.reserchInterest.toLowerCase().includes(searchKey)
  )
  this.setState({posts:result})
}

handleSearchArea = (e) => {
  const searchKey = e.currentTarget.value;

  axios.get("/posts").then(res => {
    if(res.data.success){
      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
            <h4>All Supervisors</h4>
          </div>
          <div className='col-lg-3 mt-2 mb-2'>
            <input
            className='form-control'
            type='search'
            placeholder='searchQuery'
            onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>FirstName</th>
              <th scope='col'>LastName</th>
              <th scope='col'>Email</th>
              <th scope='col'>Nic</th>
              <th scope='col'>Phone</th>
              <th scope='col'>ReserchInterest</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <td>
                  {posts.firstName}
                </td>
                <td>{posts.lastName}</td>
                <td>{posts.email}</td>
                <td>{posts.nic}</td>
                <td>{posts.phone}</td>
                <td>{posts.reserchInterest}</td>
                <td>
                  <a className='btn btn-warning' href={`/edit/${posts._id}`}>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className='btn btn-danger' href='#' onClick={() =>this.onDelete(posts._id)}>
                    <i className='far fa-trash-alt'></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='btn btn-success'><a href='/add' style={{textDecoration:'none', color:'white'}}>Add Staff Member</a></button>
      </div>
    )
  }
}

export default Home;