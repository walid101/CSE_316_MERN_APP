import React, { useState } from 'react';
import { WButton, WInput, WRow, WCol } from 'wt-frontend';

const TableEntry = (props) => {
    const { data } = props;
    let moveUpColor = ' topArrow-white';
    let moveDownColor = ' topArrow-white';
    if(props.index === props.activeList.items.length-1)
    {
        moveDownColor = ' topArrow-black';
    }
    if(props.index === 0)
    {
        moveUpColor = ' topArrow-black';
    }
    const completeStyle = data.completed ? ' complete-task' : ' incomplete-task';
    const assignedStyle = data.completed ? ' assign-black' : ' assign-red';
    const assigned_to = data.assigned_to;
    const description = data.description;
    const due_date = data.due_date;
    const status = data.completed ? 'complete' : 'incomplete';
    const [editingDate, toggleDateEdit] = useState(false);
    const [editingDescr, toggleDescrEdit] = useState(false);//hook
    const [editingStatus, toggleStatusEdit] = useState(false);
    const [editingAssign, toggleAssignEdit] = useState(false);

    const handleAssignEdit = (e) => {
        toggleAssignEdit(false);
        const newAssign = e.target.value ? e.target.value : 'No Assign.'
        const prevAssign = assigned_to;
        props.editItem(data._id, 'assigned_to', newAssign, prevAssign);
    };
    const handleDateEdit = (e) => {
        toggleDateEdit(false);
        const newDate = e.target.value ? e.target.value : 'No Date';
        const prevDate = due_date;
        props.editItem(data._id, 'due_date', newDate, prevDate);
    };

    const handleDescrEdit = (e) => {
        toggleDescrEdit(false);
        const newDescr = e.target.value ? e.target.value : 'No Description';
        const prevDescr = description;
        props.editItem(data._id, 'description', newDescr, prevDescr);
    };

    const handleStatusEdit = (e) => {
        toggleStatusEdit(false);
        const newStatus = e.target.value ? e.target.value : false;
        const prevStatus = status;
        props.editItem(data._id, 'completed', newStatus, prevStatus);
    };
    const checkEnterDesc = (e) => {
        if(e.key === "Enter")
        {
            handleDescrEdit(e);
        }
    }
    const checkEnterDate = (e) => {
        if(e.key === "Enter")
        {
            handleDateEdit(e);
        }
    }
    const checkEnterStat = (e) => {
        if(e.key === "Enter")
        {
            handleStatusEdit(e);
        }
    }
    const checkEnterAssign = (e) => {
        if(e.key === "Enter")
        {
            handleAssignEdit(e);
        }
    }
    const handleMoveUp = () => {
        if(props.index !== 0)
        {
            props.reorderItem(data._id, -1);
        }
    }   
    const handleMoveDown = () => 
    {
        if(props.index !== props.activeList.items.length - 1)
        {
            props.reorderItem(data._id, 1);
        }
    }
    return (
        <WRow className='table-entry'>
            <WCol size="5">
            {
                editingDescr || description === ''
                    ? <WInput
                        className='table-input' onBlur={handleDescrEdit}
                        //{this.addEventListener()}
                        onKeyPress={checkEnterDesc}
                        autoFocus={true} defaultValue={description} type='text'
                        wType="outlined" barAnimation="solid" inputClass="table-input-class"
                    />
                    : <div className="table-text"
                        onClick={() => toggleDescrEdit(!editingDescr)}
                    >{description}
                    </div>
            }
            </WCol>

            <WCol size="2">
                {
                    editingDate ? <input
                        className='table-input' onBlur={handleDateEdit}
                        onKeyPress={checkEnterDate}
                        autoFocus={true} defaultValue={due_date} type='date'
                        wType="outlined" barAnimation="solid" inputClass="table-input-class"
                    />
                        : <div className="table-text"
                            onClick={() => toggleDateEdit(!editingDate)}
                        >{due_date}
                        </div>
                }
            </WCol>

            <WCol size="2">
                {
                    editingStatus ? <select
                        className='table-select' onBlur={handleStatusEdit}
                        onKeyPress={checkEnterStat}
                        autoFocus={true} defaultValue={status}
                    >
                        <option value="complete">complete</option>
                        <option value="incomplete">incomplete</option>
                    </select>
                        : <div onClick={() => toggleStatusEdit(!editingStatus)} className={`${completeStyle} table-text`}>
                            {status}
                        </div>
                }
            </WCol>
            <WCol size = "2">
            {
                    editingAssign || assigned_to === ''
                    ? <WInput
                        className= "table-input" onBlur={handleAssignEdit}
                        onKeyPress={checkEnterAssign}
                        autoFocus={true} defaultValue={assigned_to} type='text'
                        wType="outlined" barAnimation="solid" inputClass="table-input-class"
                        color = "blue"
                    />
                    : <div className={`${assignedStyle} table-text`}
                        onClick={() => toggleAssignEdit(!editingAssign)}
                    >{assigned_to}
                    </div>
            }
            </WCol>
            <WCol size="1">
                <div className='button-group'>
                    <WButton className = {`table-entry-buttons ${moveUpColor}`} onClick={handleMoveUp} wType="texted">
                        <i className="material-icons">expand_less</i>
                    </WButton>
                    <WButton className = {`table-entry-buttons ${moveDownColor}`} onClick={handleMoveDown} wType="texted">
                        <i className="material-icons">expand_more</i>
                    </WButton>
                    <WButton className="table-entry-buttons" onClick={() => props.deleteItem(data, props.index)} wType="texted">
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>
        </WRow>
    );
};

export default TableEntry;