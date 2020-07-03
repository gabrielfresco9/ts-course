import React from 'react';
import {fetchTodos, deleteTodo, Todo} from "../actions";
import {StoreState} from "../reducers";
import {connect} from "react-redux";

interface AppProps {
    todos: Todo[];

    deleteTodo(id: number): void;

    fetchTodos(): any;
}

class App extends React.Component<AppProps> {
    onFetchClick = (): void => {
        this.props.fetchTodos();
    }

    deleteTodo = (id: number): void => {
        this.props.deleteTodo(id);
    }

    renderList(): JSX.Element[] {
        const {todos} = this.props;
        return todos.map(todo => <div key={todo.id}>{todo.title}
            <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
        </div>)
    }

    render() {
        return <div>
            <button onClick={this.onFetchClick}>Fetch</button>
            {this.renderList()}
        </div>;
    }
}

const mapStateToProps = ({todos}: StoreState) => {
    return {todos}
}

export default connect(mapStateToProps, {fetchTodos, deleteTodo})(App);