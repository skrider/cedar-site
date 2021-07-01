import React from 'react';
import { FooterLayout } from './styles';

const Footer : React.FC = () => {
  return (
    <FooterLayout>
      <p>Created by <b>@kriderstephen</b>, who had too much time over summer</p>
      <a href='https://github.com/skrider/ihop-site'>Github</a>
    </FooterLayout>
  )
}

export default Footer;
