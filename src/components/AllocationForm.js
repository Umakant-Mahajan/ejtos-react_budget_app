import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const AllocationForm = (props) => {
    const { dispatch,remaining,currency  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);
    const [action, setAction] = useState('');

    const submitEvent = () => {

            if(name==="" || name==="Choose...")
            {
                alert("Please Choose a valid Department");
                 return;
            }
            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost(0);
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
            console.log(expense);
        } else {
            if(cost>remaining)
                {
                   alert("Your Allocation exceeds available funds");
                     return;
                }
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
                console.log(expense);
            }
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
               <option value="Marketing" name="Marketing"> Marketing</option>
                <option value="Sales" name="Sales">Sales</option>
                <option value="Finance" name="Finance">Finance</option>
                <option value="Human Resource" name="Human Resource">Human Resource</option>
                <option value="IT" name="IT">IT</option>
                <option value="Admin" name="Admin">Admin</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>
                    <span style={{textAlign: "center", marginLeft: "1em"}} className="input-group-prepend" >{currency}</span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setCost(event.target.value)}>
                        </input>
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                </div>

        </div>
    );
};

export default AllocationForm;
