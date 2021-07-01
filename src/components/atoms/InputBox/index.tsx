import React, {useState, useRef} from 'react';
import { InputDiv } from './styles';

type InputBoxProps = {
  placeholder: string,
  value: string,
  onEdit: (e: any) => void,
}

const InputBox : React.FC<InputBoxProps> = ({placeholder, value, onEdit}) => {
  const ref = useRef<any>(null);

  const emitChange = () => {
    const html = ref.current && ref.current.innerText;
    if (html !== value) {
      onEdit({target: {...ref.current, value: html}});
    }
  }

  return (
    <InputDiv
      ref={ref}
      placeholder={placeholder}
      onInput={emitChange}
      contentEditable
      dangerouslySetInnerHTML={{__html:value}}
    />
  )
}

export default InputBox;
