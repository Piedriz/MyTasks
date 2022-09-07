import React from "react";
function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}))
    const {
      loading, 
      error, 
      item, 
      sync
    } = state
  
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [item, setItem] = React.useState(initialValue);
  // const [sync, setSync] = React.useState(false);

  //Actions creators
  const onError = (e) => {dispatch({type:actionTypes.error, payload: e})};
  const onSuccess= (parsedItem) =>{dispatch({type:actionTypes.success, payload:parsedItem})}
  const onSyncUp = ()=>{dispatch({type: actionTypes.syncUp})}
  const onSave = (newItem) => {dispatch({type: actionTypes.save, payload:newItem})}
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem)
      } catch (e) {
        onError(e)
      }
    }, 1000);
  },[sync]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem)
    } catch (e) {
      onError(e)
    }
  };
  const syncUp = () =>{
    onSyncUp()
  }
  

  return { item, saveItem, loading, error, syncUp};
}

const initialState= ({initialValue}) => ({
      loading:true, 
      error:false, 
      item:initialValue, 
      sync:false,
})

const actionTypes={
  error: 'ERROR',
  success: 'SUCCESS',
  syncUp: 'SYNCUP',
  save: 'SAVE',
}

const reducer = (state,action) =>{
  switch(action.type){
    case actionTypes.error:
      return{
        ...state,
        error: true
      }
    case actionTypes.success:
      return {
        ...state,
        item: action.payload,
        loading: false,
        sync: true,
      }
    case actionTypes.syncUp:
      return{
        ...state,
        loading:true,
        sync:false,
      }
    case actionTypes.save:
      return{
        ...state,
        item: action.payload,
      }
    default:
      return{
        ...state
      }
  }
}


export default useLocalStorage;
