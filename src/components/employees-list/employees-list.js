import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRice}) => {

    const elements = data.map(item =>  {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}  //можно написать так name={item.name} salary={item.salary} increase={item.increase}
            onDelete={() => onDelete(id)}
            onToggleIncreas={() => onToggleIncrease(id)}
            onToggleRice={() => onToggleRice(id)}/> 
        )
    })

    return (
    <ul className="app-list list-group">
        {elements}
    </ul>
    )
}

export default EmployeesList;