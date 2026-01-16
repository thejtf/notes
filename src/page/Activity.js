import React from 'react';
import Nav from '../components/Nav';
import CalendarHeatmap from '../components/CalendarHeatmap'


function Activity(props) {

    return<div className='notes_box'>
        <Nav />
        <div>
            <CalendarHeatmap />
        </div>

    </div>
}

export default Activity;