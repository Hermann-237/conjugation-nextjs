import React from 'react'
import Header from '../../components/Header'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Divider from '@mui/material/Divider'
import { EnglishMessages } from '../../messages/EnglishMessages'
import Input from '../../components/Common/Input'
import CardVerb from '../../components/CardVerb/CardVerb'
import Toolbox from '../../components/Toolbox/Toolbox'
import ModelVerb from '../../components/ModelVerb/ModelVerb'
import InfinitifVerb from '../../components/InfinitivVerb/InfinitifVerb'
import data from '../../components/Data/data'

const SectionBase = styled.div(tw`mx-4 big:mx-20`)

const EnglishPage = () => {
  return (
    <>
      <Header
        title={EnglishMessages.title.english}
        descriptionContent={EnglishMessages.description.english}
        keywordsContent={EnglishMessages.key.english}
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

export default EnglishPage
