import React from 'react'

import Sidebar from '../components/Sidebar'
import { ContainerStyled } from '../components/styles/ContainerStyled'

export default function Movies() {
  return (
    <ContainerStyled>
        <Sidebar />
        <main>
            <p>search</p>
            <p>movies</p>
        </main>
    </ContainerStyled>
  )
}
