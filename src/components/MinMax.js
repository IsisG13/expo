import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => (
     <Text style={Estilo.fontG}> O valor {props.max} é que o valor {props.min} </Text>
)