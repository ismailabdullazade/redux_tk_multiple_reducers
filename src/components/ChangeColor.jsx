import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../features/Color';

function ChangeColor() {

    const [color,setColor] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" onChange={(e)=>{setColor(e.target.value)}}/>
            <button onClick={()=>{dispatch(changeTheme(color))}}>Change Color</button>
        </div>
    );
}

export default ChangeColor;