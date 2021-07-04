import React, { useState } from 'react';
import { Input, Button } from './atoms';

export default function Submit() {
  const [songName, setSongName] = useState<string>("");
  
  return (
    <>
      <Input 
        value={songName}
        placeholder={"Mo Bamba"}
        onChange={(e) => setSongName(e.currentTarget.value)}
      />
      <Button>
        Submit
      </Button>
    </>
  )
}
