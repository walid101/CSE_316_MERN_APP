import React        from 'react';
import SidebarEntry from './SidebarEntry';

const SidebarList = (props) => {
    const setSideLists = () =>
    {
        document.onkeydown = (event) => {
            props.handleKeyPress(event);
        }
        //console.log("to the top!");
        let index = props.topIndex;
        let todoLists = props.todolists;
        let newList = []; // <- Rendered
        //console.log("topIndex is: ", props.topIndex);
        console.log(todoLists);
        try
        {
        if(index!=-1 && todoLists.length > 0)
        {
            //console.log("top index is not -1!");
            newList.push(
            <SidebarEntry
                handleSetActive={props.handleSetActive} activeid={props.activeid}
                id={todoLists[index].id} key={todoLists[index].id} name={todoLists[index].name} _id={todoLists[index]._id}
                updateListField={props.updateListField}
                swapToTop = {props.swapToTop}
            />);
            for(let i = 0; i<todoLists.length; i++)
            {
                if(i != index)
                {
                    newList.push(
                    <SidebarEntry
                        handleSetActive={props.handleSetActive} activeid={props.activeid}
                        id={todoLists[i].id} key={todoLists[i].id} name={todoLists[i].name} _id={todoLists[i]._id}
                        updateListField={props.updateListField}
                        swapToTop = {props.swapToTop}
                    />);
                }
            }
            index = -1
            return newList;
        }
        } catch(err) { return props.todolists.map(todo => (
            <SidebarEntry
                handleSetActive={props.handleSetActive} activeid={props.activeid}
                id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                updateListField={props.updateListField}
                swapToTop = {props.swapToTop}
            />
        ));}
        //console.log("top index IS -1!");
        return props.todolists.map(todo => (
                <SidebarEntry
                    handleSetActive={props.handleSetActive} activeid={props.activeid}
                    id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                    updateListField={props.updateListField}
                    swapToTop = {props.swapToTop}
                />
            ));
    }
    return (
        <>
            {
                //setSideLists()
                props.todolists && setSideLists()
                /*
                props.todolists.map(todo => (
                    <SidebarEntry
                        handleSetActive={props.handleSetActive} activeid={props.activeid}
                        id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                        updateListField={props.updateListField}
                        swapToTop = {props.swapToTop}
                    />
                ))
                */
            }
        </>
    );
};

export default SidebarList;