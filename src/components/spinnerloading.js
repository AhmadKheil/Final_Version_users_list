import React from 'react';
import '../index.css'

function Spinner()
{
    return (
        <div className='spinner'>
            <div className='spinner_con'>
                <span className='ball'>
                </span>
            </div>
            <h1 className='loading'>Loading...</h1>
        </div>
    )
}
export default Spinner