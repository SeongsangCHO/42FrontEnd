const initialState = {
  name: 'secho',
  password : '1234',
};



const rootReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name,
      }
  }
}

export default rootReducer;