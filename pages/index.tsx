import React, {useContext, useEffect, useState} from "react";
import CommentCard from '../src/components/CommentCard';

import {Navbar} from '../src/components/Navbar';

import { CardLayout } from "../styles/pages/home";
import Submit from "../src/components/SubmitComment";

export default function Home() {
  const {setNavbar} = useContext(Navbar);
  const [showComment, setShowComment] = useState<boolean>(false);
  const [cards, setCards] = useState<TextComment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setNavbar([
      {
        name: showComment ? "Back" : "Comment",
        type: "effect",
        effect: () => setShowComment(!showComment),
      }
    ])
  }, [showComment])

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch('http://localhost:3000/api/comments', {
        method: 'GET'
      })
        .then(res => res.json())
        .catch(err => setError(err.message))
      setCards(res);
      setIsLoading(false);
    })()
  }, []);

  return (
    <>
      {showComment && <Submit />}
      {isLoading ? "Loading..." : error ? error : (
        <CardLayout>
          {cards.map((card, index) => <CommentCard key={index} content={card} />)}
        </CardLayout>
      )}
    </>
  )
}
