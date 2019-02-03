const instial_state = {
	datalist : []
};
export const ClientReducer = function(state=[instial_state],action)
{
	switch(action.type)
	{
		case 'LIST_CLIENT' :
			return {...state, datalist:action.ClientDetails};
		default :
			return state
	}
}
