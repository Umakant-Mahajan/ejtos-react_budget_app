import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const updateBudget=()=>{
       const act = {
           type: "SET_BUDGET",
           budget: newBudget
       }

       dispatch(act);
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
<button style={{margin: "0 0 1em 0"}} onClick={updateBudget}>Update</button>
</div>
    );
};
export default Budget;
