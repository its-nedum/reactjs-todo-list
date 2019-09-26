import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <form  onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" 
                name="title" 
                style={{flex: '10', padding: '10px', height:'50px', fontSize: '18px'}} 
                placeholder="Add a Todo..." 
                value={this.state.title}
                onChange={this.onChange}
                required
                />
                <input type="submit" className="btn" style={{flex: '1'}} value="Add Todo" />
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo;