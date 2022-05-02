import React from 'react'

import Sidebar from '../components/Sidebar'
import { ContainerStyled } from '../components/styles/ContainerStyled'

export default function Homepage() {
  return (
    <ContainerStyled>
        <Sidebar />
        <main>
            <p>search</p>
            <p>trending</p>
        </main>
    </ContainerStyled>
  )
}
