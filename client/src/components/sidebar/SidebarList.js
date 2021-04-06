import React        from 'react';
import SidebarEntry from './SidebarEntry';

const SidebarList = (props) => {
    const setSideLists = () =>
    {
        console.log("to the top!");
        let index = props.topIndex;
        let todoLists = props.todolists;
        let newList = []; // <- Rendered
        if(index!=-1)
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