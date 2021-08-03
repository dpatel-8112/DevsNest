import React from "react";

const ActiveContext = React.createContext();
const ActiveProvider = ActiveContext.Provider;
const ActiveConsumer = ActiveContext.Consumer;

export { ActiveContext };
export { ActiveProvider, ActiveConsumer };
