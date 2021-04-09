import React from 'react';
import { useState } from 'react';
import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const redoStyle = props.hasRedo ? ' topArrow-white' : ' topArrow-black';
    let undoStyle = ' topArrow-white';
    console.log("hasRedo? : " , props.hasRedo);
    if(props.hasUndo === false)
    {
        undoStyle = ' topArrow-black';
    }
    const clickDisabled = () => { };
    const [taskClick, updateTaskClick] = useState(1);
    const [dateClick, updateDateClick] = useState(1);
    const [statClick, updateStatClick] = useState(1);
    const handleTaskClick = (e) => {
        updateTaskClick(taskClick+1);//odd = sort less to great , even => great to less
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
            <WCol size = "11"></WCol>
            <WCol size="1">
                <div className="table-header-buttons">
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : () => {props.clearTransactions(); props.setActiveList({})}} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>
            <WCol size="5">
                <WButton className='table-header-section' wType="texted" onClick = {
                    handleTaskClick
                }>Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick = {
                    handleDateClick
                }>Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick = {
                    handleStatClick
                }>Status</WButton>
            </WCol>
            <WCol size = "2">
            <WButton className='table-header-section' wType="texted" onClick = {
                    handleStatClick
                }>Assign. To</WButton>
            </WCol>
            <WCol size = "1">
                <WButton className={`sidebar-buttons undo-redo ${undoStyle}`} onClick={props.undo} wType="texted" clickAnimation="ripple-light" shape="rounded">
                <i className="material-icons">undo</i>
                </WButton>
                <WButton className={`sidebar-buttons undo-redo redo " ${redoStyle}`} onClick={props.redo} wType="texted" clickAnimation="ripple-light" shape="rounded">
                    <i className="material-icons">redo</i>
                </WButton>
            </WCol>
        </WRow>
    );
};

export default TableHeader;