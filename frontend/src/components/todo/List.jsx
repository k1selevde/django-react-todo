import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getTodos, deleteTodo,toggleTodo} from "../../actions/todos";


class List extends Component {

    componentDidMount() {
        this.props.getTodos()
    }



    render() {
        const {todos} = this.props;
        return (
            <>
                <h2>Todo LIST</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>description</th>
                            <th>done</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos && todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td><input
                                    onChange={this.props.toggleTodo.bind(this, todo)}
                                    type="checkbox"
                                    defaultChecked={todo.done}
                                /></td>
                                <td><button
                                    onClick={this.props.deleteTodo.bind(this, todo.id)}
                                    className='btn btn-danger btn-sm'
                                >
                                    Delete
                                </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps, {getTodos, deleteTodo, toggleTodo})(List)