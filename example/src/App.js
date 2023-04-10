import React from 'react'

import { Button } from 'flowerses' // Oluşturulan buton 
import 'flowerses/dist/index.css'

// Oluşturulan 5 farklı button her buttona farklı type veriyoruz.
const App = () => {
  return (
    <>
      <Button  type="primary" text="Primary Button"/>
      <Button  type="dashed" text="Dashed Button"/>
      <Button  type="text" text="Text Button"/>
      <Button  type="link" text="Link Button"/>
      <Button  type="default" text="Default Button"/>
    </>
  )
  }
export default App
