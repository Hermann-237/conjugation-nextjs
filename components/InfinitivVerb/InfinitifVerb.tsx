import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import Section from '../Common/Section'
import Typography from '../Common/Typography'
import { DataType } from '../CardVerb/CardVerb'

const ButtonBase = styled.div(tw`mt-4 border-2 shadow rounded-xl p-4 big:mx-32 big:flex items-center justify-between`)

const InfinitifVerb = ({verbList}:DataType):JSX.Element => {
    const [{infinitif,partiticipe_passe,partiticipe_present}] = verbList
    return (
        <ButtonBase>
      <Section flex gap={2}>
           <Typography variant='text' isTertiary>Infinitif:</Typography>
           <Typography variant='text' isSecondary>{infinitif}</Typography>
       </Section>
       <Section flex gap={2}>
           <Typography variant='text' isTertiary>Participe Présent:</Typography>
           <Typography variant='text' isSecondary>{partiticipe_present}</Typography>
       </Section>
       <Section flex gap={2}>
           <Typography variant='text' isTertiary>Participe Passé :</Typography>
           <Typography variant='text' isSecondary>{partiticipe_passe}</Typography>
       </Section>
      </ButtonBase>
    )
}

export default InfinitifVerb
