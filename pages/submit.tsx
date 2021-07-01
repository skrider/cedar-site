import React, { useState } from 'react';
import { Input, InputBox, Button } from '../src/components/atoms';
import { CommentInput, TextArea } from '../styles/pages/submit';
import Home from '.';

export default function Submit() {
  const [name, setName] = useState<string>("Anonymous Bear");
  const [comment, setComment] = useState<string>("");

  return (
    <>
      <Input 
        value={name} 
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <CommentInput>
        <InputBox
          placeholder={"Music was mid lemme get aux next time"}
          value={comment}
          onEdit={(e) => {
            setComment(e.target.value)
          }}
        />
      </CommentInput>
      <TextArea />
      <Button>
        Submit
      </Button>
      <Home />
    </>
  )
}
