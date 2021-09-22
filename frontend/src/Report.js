import React from 'react'
import './Report.css'

const Report = (props) => {

    return (
        <div className='report'>
            <div className='section-1 section'>
                <div>Id:
                    <span className='reportId'> {props.reportId}</span>
                </div>
                <div>State: {props.state}</div>
                <div className='details'>Details...</div>
            </div>
            <div className='section-2 section'>
                <div>Type: 
                    <span className='reportType'> {props.reportType}</span>
                </div>
                <div>Blocked: {props.blocked? 'true' : 'false'}</div>
            </div>
            <div className='section-3 section'>
                <button onClick={()=>props.blockReport(props.id)} className='button-1'>Block</button>
                <button onClick={()=>props.resolveReport(props.id)} className='button-2'>Resolve</button>
            </div>
        </div>
    )
};

export default Report;
