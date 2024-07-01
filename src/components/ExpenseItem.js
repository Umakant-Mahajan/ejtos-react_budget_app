import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import './Dropdown.css'
const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const reduceAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    const handleDeleteExpense= (name)=> {
          dispatch({type: 'DELETE_EXPENSE', payload:name});
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className="button plus-button" onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button className="button minus-button" size='1.5em' onClick={event => reduceAllocation(props.name)}>-</button></td>
        <td><TiDelete onClick={event => handleDeleteExpense(props.name)} size="1.5em">x</TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
