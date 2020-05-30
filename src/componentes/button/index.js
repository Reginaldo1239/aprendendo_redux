import React from 'react';
import Style from './style.module.css';

export default function Button(props){
    return <button  type='button' onClick={()=>props.onClick()} className={Style.button }>{props.children}</button>
}    