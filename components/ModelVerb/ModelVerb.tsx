import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Section from '../Common/Section'
import Typography from '../Common/Typography'
import Link from 'next/link'
import { DataType } from '../CardVerb/CardVerb'

const SectionContainer = styled.div(tw`mt-4 border-2  big:flex  items-center justify-between`)

const ModelVerb = ({verbList}:DataType) => {
    const [{model,auxiliary,other_infinitive}] = verbList
    const auxiliaryArray = auxiliary.split(',')
    return (
        <SectionContainer>
      <Section flex gap={2}>
           <Typography variant='text' isTertiary>Model:</Typography>
           <Typography variant='text' isSecondaryHover><Link href='/english/[englishVerb]' as={`/english/${model}`} passHref>{model}</Link></Typography>
       </Section>
       <Section flex gap={2}>
           <Typography variant='text' isTertiary>Auxiliary:</Typography>
           <Typography variant='text' isSecondaryHover><Link href='/english/[englishVerb]' as={`/english/${auxiliaryArray[0]}`} passHref>{auxiliaryArray[0]}</Link></Typography>
           <Typography variant='text' isSecondaryHover>,</Typography>
           <Typography variant='text' isSecondaryHover><Link href='/english/[englishVerb]' as={`/english/${auxiliaryArray[1]}`} passHref>{auxiliaryArray[1]}</Link></Typography>
       </Section>
       <Section flex gap={2}>
           <Typography variant='text' isTertiary>Other forms:</Typography>
           <Typography variant='text' isSecondary>{other_infinitive} </Typography>
       </Section>
      </SectionContainer>
    )
}

export default ModelVerb
