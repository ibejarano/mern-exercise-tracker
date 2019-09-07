import React , {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ''
        };
				this.onChangeUsername = this.onChangeUsername.bind(this);
				this.onSubmit = this.onSubmit.bind(this);
        };
        

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    };


    onSubmit(e){
			e.preventDefault();
			const user = {
					username: this.state.username
			};
			
			console.log(user);
			
			axios.post('http://localhost:5000/users/add', user)
				.then(res => console.log(res.data));

			this.setState({
					username: ''
			})
    };
        
	render () {
			return(
			<div>
				<h3>Create a new User</h3>
				<form onSubmit={this.onSubmit} >
					<div className="form-group">
					<label>Username: </label>
					<input className="form-control" type="text" onChange={this.onChangeUsername} 
						value={this.state.username} required />
					</div>
					<div className="form-group">
							<input type="submit" value="Create New User" 
							className="btn btn-primary" />
					</div>

				</form>
			</div>
					)
	}
};