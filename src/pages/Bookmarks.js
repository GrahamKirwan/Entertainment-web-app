import React from 'react'

import Sidebar from '../components/Sidebar'
import { ContainerStyled } from '../components/styles/ContainerStyled'

export default function Bookmarks() {
  return (
    <ContainerStyled>
        <Sidebar />
        <main>
            <p>search</p>
            <p>bookmarks</p>
        </main>
    </ContainerStyled>
  )
}
