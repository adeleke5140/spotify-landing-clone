import React from "react";
import { RiSpotifyLine } from 'react-icons/ri'
import { FaSpotify } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import styled from 'styled-components'

const Header = styled.header`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:12vh;
  background: #000;
  padding: 0 2em;
  position: fixed;
`
const P = styled.p`
  color:#fff;
  font-weight:bold;
  font-size: 1.5em;
  margin-left: 5%;
`

const List = styled.ul`
  list-style:none;
  display:inline-block;
`
const ListItem = styled.li`
  display:inline-block;
`


export default function Navbar({listItem}) {
  console.log(listItem)
  return (
    <Header>
      <div style={{display: 'flex', alignItems:'center', marginLeft:'4em'}}>
      <IconContext.Provider value={{color: '#fff', size:'2.5em'}}>
          <FaSpotify/>
      </IconContext.Provider>
        <P>Spotify</P>
      </div>
      <List>
      </List>
    </Header>
  )
}
