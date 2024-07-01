import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch,remaining,currency } = useContext(AppContext);
    const [currBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        if(event.target.value>20000)
            {
                alert("Your Budget cant Exceed 20000");
                return;
            }
        if(event.target.value<budget-remaining)
           {
            alert("Your Budget cant be lower than Spendings : "+ (remaining));
            return;
           }

        setNewBudget(event.target.value);
      const act = {
            type: "SET_BUDGET",
            budget: currBudget
        }
 
        dispatch(act);
        
    }

    // const updateBudget=()=>{
    //    const act = {
    //        type: "SET_BUDGET",
    //        budget: currBudget
    //    }

    //    dispatch(act);
    // }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency + currBudget}</span>
<input type="number" step="10" value={currBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
