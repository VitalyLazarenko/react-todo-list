import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {

    const items = ['Learn React!', 'Build Awsome App!'];
    return (
        <ul>
            <li><TodoListItem label="Drink Coffee"/></li>
            <li><TodoListItem
                label="Build Awsome App!"
                important
            /></li>
        </ul>
    );
};

export default TodoList;
