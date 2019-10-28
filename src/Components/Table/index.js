import React from 'react';
import './styles.scss';
import TaskStatus from '../TaskStatus';
import PriorityLabel from '../PriorityLabel';

const table = React.memo(props => {
    return (
        <div className='dashboard-table__wrapper'>
            <div className='dashboard-table__title'>
                OTF-CRM
                <TaskStatus />
            </div>
            <div className='dashboard-table__body'>
                <table className='dashboard-table'>
                    <tr>
                        <th>ticket number</th>
                        <th className='text-left'>description</th>
                        <th>priority</th>
                        <th>due-time</th>
                        <th>status</th>
                    </tr>
                    <tr>
                        <td>CRM-9999</td>
                        <td className='text-left'>This ticket will never exist</td>
                        <td className='flex-center'><PriorityLabel labelColor='#553EF1'>Low</PriorityLabel></td>
                        <td>4h pm</td>
                        <td>In - progress</td>
                    </tr>
                    <tr>
                        <td>CRM-9999</td>
                        <td className='text-left'>This ticket will never exist</td>
                        <td className='flex-center'><PriorityLabel labelColor='#553EF1'>Low</PriorityLabel></td>
                        <td>4h pm</td>
                        <td>In - progress</td>
                    </tr>
                    <tr>
                        <td>CRM-9999</td>
                        <td className='text-left'>This ticket will never exist</td>
                        <td className='flex-center'><PriorityLabel labelColor='#E8354B'>High</PriorityLabel></td>
                        <td>4h pm</td>
                        <td>In - progress</td>
                    </tr>
                    <tr>
                        <td>CRM-9999</td>
                        <td className='text-left'>This ticket will never exist</td>
                        <td className='flex-center'><PriorityLabel labelColor='#553EF1'>Low</PriorityLabel></td>
                        <td>4h pm</td>
                        <td>In - progress</td>
                    </tr>
                    <tr>
                        <td>CRM-9999</td>
                        <td className='text-left'>This ticket will never exist</td>
                        <td className='flex-center'><PriorityLabel labelColor='#553EF1'>Low</PriorityLabel></td>
                        <td>4h pm</td>
                        <td>In - progress</td>
                    </tr>
                    <tr>
                        <td>CRM-9999</td>
                        <td className='text-left'>This ticket will never exist</td>
                        <td className='flex-center'><PriorityLabel labelColor='#E8354B'>High</PriorityLabel></td>
                        <td>4h pm</td>
                        <td>In - progress</td>
                    </tr>
                    <tr>
                        <td>CRM-9999</td>
                        <td className='text-left'>This ticket will never exist</td>
                        <td className='flex-center'><PriorityLabel labelColor='#E8354B'>High</PriorityLabel></td>
                        <td>4h pm</td>
                        <td>In - progress</td>
                    </tr>
                    <tr>
                        <td>CRM-9999</td>
                        <td className='text-left'>This ticket will never exist</td>
                        <td className='flex-center'><PriorityLabel labelColor='#E8354B'>High</PriorityLabel></td>
                        <td>4h pm</td>
                        <td>In - progress</td>
                    </tr>
                </table>
            </div>
        </div>
    );
});

export default table;