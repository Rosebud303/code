import React from 'react';
import Report from './Report';
import './Container.css';

export default function Container(props) {


    let filteredReports = props.reports.filter((report => {
        return report.payload.reportType === "SPAM"
      }));

    return (
        <div className='container'>
            {
                filteredReports.map(r => {
                    return <Report 
                                key={r.id} 
                                id={r.id}
                                reportId={r.payload.reportId}
                                state={r.state}
                                reportType={r.payload.reportType}
                                resolveReport={props.resolveReport}
                                blockReport={props.blockReport}
                                blocked={r.blocked}
                            />
                })
            }
        </div>
    )
};