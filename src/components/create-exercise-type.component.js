import React , {Component} from 'react';
import axios from 'axios';

export default class CreateExerciseType extends Component {
    constructor(props){
        super(props);
        this.state = {
			description: '',
			calories: 0
        };
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeCalories = this.onChangeCalories.bind(this);		this.onSubmit = this.onSubmit.bind(this);
        };
        

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    };

    onChangeCalories(e){
        this.setState({
            calories: parseInt(e.target.value)
        });
    };


    onSubmit(e){
		e.preventDefault();
		const exerciseType = {
			description: this.state.description,
			calories: this.state.calories
		};
		
		console.log(exerciseType);
		
		axios.post('http://localhost:5000/exercises/add-type', exerciseType)
			.then(res => console.log(res.data));

		this.setState({
				description: '',
				calories: 0
		})
    };
        
	render () {
			return(
			<div>
				<h3>Create a Exercise Type</h3>
				<form onSubmit={this.onSubmit} >
					<div className="form-group">
					<label>Exercise Description: </label>
					<input className="form-control" type="text" onChange={this.onChangeDescription} 
						value={this.state.description} required />
					</div>
					<div className="form-group">
					<label>Calories: </label>
					<input className="form-control" type="text" onChange={this.onChangeCalories} 
						value={this.state.calories} required />
					</div>
					<div className="form-group">
					<input type="submit" value="Create New Exercise Type" 
					className="btn btn-primary" />
					</div>
				</form>
			</div>
					)
	}
};