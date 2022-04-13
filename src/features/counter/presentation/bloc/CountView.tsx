import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CounterBloc, { CounterEvent } from "./CounterEvent";
import { useBloc } from "./state";

const Count = () => {
  const [state, bloc] = useBloc(CounterBloc, {
    create: () => new CounterBloc(),
  });

  const handleClick = () => {
    bloc.add(CounterEvent.Increment);
  };

  return <TouchableOpacity onPress={handleClick}>
    <View style={
      {
        alignItems: 'center',
        backgroundColor: 'rgb(93, 95, 222)',
        borderRadius: 8,
        height: 48,
        justifyContent: 'center',
      }
    }>
      <Text style={{
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 22,
      }}>{state}</Text>
    </View>
  </TouchableOpacity>

};

export default Count;
