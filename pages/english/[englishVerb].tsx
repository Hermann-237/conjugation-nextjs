import React from 'react'
import Header from '../../components/Header'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Divider from '@mui/material/Divider'
import { useRouter } from 'next/router'

import { EnglishMessages } from '../../messages/EnglishMessages'
import Input from '../../components/Common/Input'
import CardVerb from '../../components/CardVerb/CardVerb'
import Toolbox from '../../components/Toolbox/Toolbox'
import ModelVerb from '../../components/ModelVerb/ModelVerb'
import InfinitifVerb from '../../components/InfinitivVerb/InfinitifVerb'
import data from '../../components/Data/data'

const SectionBase = styled.div(tw`mx-4 big:mx-20`)

const English = () => {
    const {query:{englishVerb}} = useRouter()
    console.log(englishVerb)
    return (
        <>
      <Header
        title={EnglishMessages.title.verbEnglish(englishVerb)}
        descriptionContent={EnglishMessages.description.verbEnglish(englishVerb)}
        keywordsContent={EnglishMessages.key.verbEnglish(englishVerb)}
      />
      <Input />
      <SectionBase>
        <Toolbox />
        <InfinitifVerb verbList={data}/>
        <Divider style={{ marginTop: '2rem' }} />
        <ModelVerb verbList={data}/>
        <CardVerb verbList={data}/>
      </SectionBase>
    </>
    )
}

export default English
