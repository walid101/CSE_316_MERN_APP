import React from 'react';
import { useState } from 'react';
import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };
    const [taskClick, updateTaskClick] = useState(1);
    const [dateClick, updateDateClick] = useState(1);
    const [statClick, updateStatClick] = useState(1);
    const handleTaskClick = (e) => {
        updateTaskClick(taskClick+1);
        props.sortList(1, taskClick);
    }
    const handleDateClick = (e) => {
        updateDateClick(dateClick + 1);
        props.sortList(2, dateClick);
    }
    const handleStatClick = (e) => {
        updateStatClick(statClick + 1);
        props.sortList(3, statClick);
    }
    return (
        <WRow className="table-header">  
            <WCol size="4">
                <WButton className='table-header-section' wType="texted" onClick = {
                    handleTaskClick
                }>Task</WButton>
            </WCol>

            <WCol size="3">
                <WButton className='table-header-section' wType="texted" onClick = {
                    handleDateClick
                }>Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick = {
                    handleStatClick
                }>Status</WButton>
            </WCol>

            <WCol size="3">
                <div className="table-header-buttons">
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : () => props.setActiveList({})} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
    );
};

export default TableHeader;