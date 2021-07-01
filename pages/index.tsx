import React from "react";
import CommentCard from '../src/components/CommentCard';

import { CardLayout } from "../styles/pages/home";
import { fakeCards } from "../src/constants";

export default function Home() {
  
  return (
    <CardLayout>
      {fakeCards.map((card, index) => <CommentCard key={index} content={card} />)}
    </CardLayout>
  )
}
