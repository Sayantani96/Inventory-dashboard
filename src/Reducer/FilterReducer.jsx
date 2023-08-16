export const filterReducer=(state,action)=>{

    switch(action.type){
        case 'DEPT_FILTER':
            console.log(action.payload)
        if(action.payload.dept!='All Departments'){
            const deptFilteredData=action.payload.inventory.filter(prod=>prod.department===action.payload.dept);
            return{
                ...state,
                inventory:deptFilteredData,
                dept:action.payload.dept
            }
        }
        return{
            ...state,
            inventory:action.payload.inventory
        }
            
    }
}