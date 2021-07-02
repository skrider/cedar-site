import React, { useState } from 'react';
import { Input, Textarea, Button } from '../src/components/atoms';
import Home from '.';

export default function Submit() {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  return (
    <>
      <Input 
        value={name}
        placeholder={"Anonymous Bear"}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <Textarea
        placeholder={"Music was mid lemme get aux next time"}
        value={comment}
        onChange={(e) => {
          setComment(e.target.value)
        }}
      />
      <Button>
        Submit
      </Button>
      <Home />
    </>
  )
}
