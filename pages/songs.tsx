import React, {useEffect, useContext, useState} from 'react';
import { CardLayout } from '../styles/pages/home';
import {Navbar} from '../src/components/Navbar';
import Submit from '../src/components/SubmitSong';
import { 
  SongCard, 
  SongImage, 
  SongTitle,
  SongHeader 
} from '../styles/pages/songs';
import { fakeSongs } from '../src/constants';

const Songs : React.FC = () => {
  const {setNavbar} = useContext(Navbar);
  const [showSubmit, setShowSubmit] = useState<boolean>(true);
  
  useEffect(() => {
    setNavbar([
      {
        name: showSubmit ? "Back" : "Recommend",
        type: "effect",
        effect: () => setShowSubmit(!showSubmit),
      },
      {
        name: "Home",
        type: "link",
        route: "/",
      }
    ])
  }, [showSubmit])
  
  return (
    <>
      {showSubmit && <Submit />}
      <CardLayout>
        {fakeSongs.map(({name, imageLink}, index) => (
          <SongCard
            key={`song-${index}`}
          >
            <SongImage alt="song" src={imageLink} />
            <SongHeader>
              <SongTitle>
                {name}
              </SongTitle>
            </SongHeader>
          </SongCard>
        ))}
      </CardLayout>
    </>
  )
}

export default Songs;
