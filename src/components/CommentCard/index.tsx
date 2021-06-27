import React from "react";
import { CommentCardContainer, CommentCardHeader, CommentCardDate } from './styles';
import Store from '../../store';
import {Button} from '../atoms';

type CommentCardProps = {
  content: TextComment,
}

const CommentCard : React.FC<CommentCardProps> = ({content : {content, name, date}}) => {
  return (
    <CommentCardContainer>
      {name ? <CommentCardHeader>{name}</CommentCardHeader> : ''}
      <p>{content}{' '}<CommentCardDate>{date}</CommentCardDate></p>
      <Store.Consumer>
        {({appState : {mode}}) => (
          mode === "admin" ? (
            <Button>
              Delete
            </Button>
          ) : (
            ''
          )
        )}
      </Store.Consumer>
    </CommentCardContainer>
  )
}

export default CommentCard;
