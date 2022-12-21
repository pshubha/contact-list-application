import React,{useState, useEffect} from 'react'

export const RemoveContact = React.createContext();

const RemoveCon=(props)=>{
    const initialState = JSON.parse(localStorage.getItem('ContactList')) || []
    const [data, setData] = useState(initialState);
    

    useEffect(() => {
        localStorage.setItem('ContactList', JSON.stringify(data))
    }, [data])

    const removeData = (id) => {
        setData(data.filter(d => d.id !== id))
    }

    return (
        <div>
            <RemoveContact.Provider value={{ removeData }}>
                {props.children}
            </RemoveContact.Provider>
        </div>
    )
}

export default RemoveCon
