import React, { Component } from 'react';
import axios from 'axios';


export default class viewMarking extends Component {

constructor(props){
    super(props);

    this.state={
        posts:[]
    };
}

componentDidMount(){
    this.retrivePosts();
}

retrivePosts(){
    axios.get('http://localhost:8070/posts').then(res=>{
        if(res.data.success){
            this.setState({
                posts:res.data.existingPosts
            });
            console.log(this.state.posts);
        }
    });
}

onDelete = (id) =>{
    axios.delete(`http://localhost:8070/delete/${id}`).then ((res)=>{
        alert("Delete Successfully");
        this.retrivePosts();
    })
}

filterData(posts,searchKey){
    const result = posts.filter((post)=>
    post.criteria.toLowerCase().includes(searchKey) ||
    post.distribution.includes(searchKey)
    )

    this.setState({posts:result})
}
handleSearchArea = (e) =>{
    const searchKey=e.currentTarget.value;

    axios.get('http://localhost:8070/posts').then(res=>{
        if(res.data.success){
        
            this.filterData(res.data.existingPosts,searchKey)
        }
    });

}
  render() {
    return (
        <section id="content" className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                    <h3>All Marking Schemes</h3>
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                        <input
                        className="form-control"
                        type="search"
                        placeholder="search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}>
                        </input>
                    </div>
                </div>                
                <table className="table table-hover" style={{marginTop:'40px'}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Marking Criteria</th>
                        <th scope="col">Description</th>
                        <th scope="col">Marking Distribution</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map((posts,index)=>
                    <tr>
                        <th scope="row">{index+1}</th>
                            <td>
                            <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                            {posts.criteria}
                            </a>
                            </td>                            
                        <td>{posts.description}</td>
                        <td>{posts.distribution}</td>
                        <td>
                            <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                                <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                            &nbsp;
                            <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                                <i className="fas fa-trash-alt"></i>&nbsp;Delete
                            </a>
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
                <button className="btn btn-success">
                    <a href={"/create"} style={{textDecoration:'none',color:'white'}}>Add</a>
                </button>
            </div>
        </section>
    )
  }
}
