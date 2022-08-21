import React from 'react';

import { FontAwesome } from '@expo/vector-icons';


export const Icons = {
 
    FontAwesome,
}

const Icon = ({ name, color , size = 24, style ={} }) => {
    const fontSize = 24;
 
    return ( 
                <FontAwesome  name={name} size={size || fontSize} color={color} style={style} />
    )
}

export default Icon

