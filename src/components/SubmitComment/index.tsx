import React from 'react';
import { Field, Form } from 'react-final-form';
import { Input, Textarea, Button } from '../atoms';
import { FormLayout } from './styles';

const Submit = () => (
  <Form 
    onSubmit={async (value) => {
      await fetch('http://localhost:3000/api/comments', {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type":"application/json"
        }
      })
      location.reload();
    }}
    render={({handleSubmit}) => (
      <FormLayout
        onSubmit={handleSubmit}
      >
        <Field 
          name="name"
          render={({input}) => (
            <Input 
              placeholder={"Anonymous Bear"}
              {...input}
            />
          )}
        />
        <Field
          name="content"
          render={({input}) => (
            <Textarea
              placeholder={"Music was mid lemme get aux next time"}
              {...input}
            />
          )}
        />
        <Button type="submit">
          Submit
        </Button>
      </FormLayout>
    )}
  />
)

export default Submit;
