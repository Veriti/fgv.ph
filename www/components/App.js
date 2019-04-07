import React, { useState } from 'react'

export const AppContext = React.createContext();

export default ({ children }) => {
  const [menu, setMenu] = useState();

  return (
    <AppContext.Provider value={{
      theme,
      menu, setMenu
    }}>
      { children }
    </AppContext.Provider>
  )
}

const theme = {
  colors: {
    primary: "#1D800E"
  }
}
