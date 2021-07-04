import React, {useContext, useEffect, useState} from "react";
import CommentCard from '../src/components/CommentCard';

import {Navbar} from '../src/components/Navbar';

import { CardLayout } from "../styles/pages/home";
import { fakeCards } from "../src/constants";
import Submit from "../src/components/SubmitComment";

export default function Home() {
  const {setNavbar} = useContext(Navbar);
  const [showComment, setShowComment] = useState<boolean>(false)

  useEffect(() => {
    setNavbar([
      {
        name: showComment ? "Back" : "Comment",
        type: "effect",
        effect: () => setShowComment(!showComment),
      },
      {
        name: "Songs",
        type: "link",
        route: "/songs",
      },
    ])
  }, [showComment])

  return (
    <>
      {showComment && <Submit />}
      <CardLayout>
        {fakeCards.map((card, index) => <CommentCard key={index} content={card} />)}
      </CardLayout>
    </>
  )
}
