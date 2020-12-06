import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../../actions/todos'

class Form extends Component {
    state = {
        title: '',
        description: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { title, description} = this.state;
        const new_todo = { title, description}
        this.props.addTodo(new_todo)
        this.setState({
            title: '',
            description: ''
        })
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        const {title, description} = this.state
        return (
            <div className='card card-body nt-4 nb-4'>
                <h2>Add Todo Form</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label htmlFor="">Title</label>
                        <input
                            type="text"
                            className='form-control'
                            name='title'
                            onChange={this.onChange}
                            value={title}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Description</label>
                        <input
                            type="text"
                            className='form-control'
                            name='description'
                            onChange={this.onChange}
                            value={description}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type='submit'
                            className='btn btn-primary'
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}


export default connect(null, {addTodo})(Form)