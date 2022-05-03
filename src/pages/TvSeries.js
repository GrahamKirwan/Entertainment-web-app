import React from 'react'

import Sidebar from '../components/Sidebar'
import { ContainerStyled } from '../components/styles/ContainerStyled'

export default function TvSeries() {
  return (
    <ContainerStyled>
        <Sidebar />
        <main>
            <p>search</p>
            <p>tv series</p>
        </main>
    </ContainerStyled>
  )
}
