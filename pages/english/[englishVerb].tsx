import React from 'react'
import Header from '../../components/Header'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Divider from '@mui/material/Divider'
import { useRouter } from 'next/router'
import axios from 'axios'

import { EnglishMessages } from '../../messages/EnglishMessages'
import Input from '../../components/Common/Input'
import CardVerb from '../../components/CardVerb/CardVerb'
import Toolbox from '../../components/Toolbox/Toolbox'
import ModelVerb from '../../components/ModelVerb/ModelVerb'
import InfinitifVerb from '../../components/InfinitivVerb/InfinitifVerb'
import Footer from '../../components/Footer/Footer'
import { GetServerSideProps } from 'next'
import { EnglishPopularVerbProps } from '../../components/PopularVerbs/EnglishPopularVerb'
import { EnglishIrregularVerbProps } from '../../components/EnglishIrregularVerb/EnglishIrregularVerb'

type DataTypes = {
  result: string
  infinitive: string
  other_infinitive: string
  preterite: string
  past_participle: string
  model: string
  auxiliary: string
  conjugation: {
    mode: string
    conjugation_forms: {
      title: string
      mode_array: string[]
    }[]
  }[]
}

const SectionBase = styled.div(tw`mx-4 big:mx-20`)
const English = ({ dataVerb,popularVerb ,irregularVerb}: { dataVerb: DataTypes }
  &EnglishPopularVerbProps
  &EnglishIrregularVerbProps
  ) => {
  const {
    query: { englishVerb },
  } = useRouter()
  return (
    <>
      <Header
        title={EnglishMessages.title.verbEnglish(englishVerb)}
        descriptionContent={EnglishMessages.description.verbEnglish(
          englishVerb,
        )}
        keywordsContent={EnglishMessages.key.verbEnglish(englishVerb)}
      />
      <Input />
      <SectionBase>
        <Toolbox />
        <InfinitifVerb verbList={[dataVerb]} />
        <Divider style={{ marginTop: '2rem' }} />
        <ModelVerb verbList={[dataVerb]} />
        <CardVerb verbList={[dataVerb]} popularVerb={popularVerb} irregularVerb={irregularVerb}/>
      </SectionBase>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const DEV_URL = process.env.DEV1
  const { data: dataVerb } = await axios.get<DataTypes>(`${DEV_URL}/english/verb/${context.params?.englishVerb}`)
  const { data: popularVerb } = await axios.get<EnglishPopularVerbProps>(`${DEV_URL}/english/popular`)
  const { data: irregularVerb } = await axios.get<EnglishIrregularVerbProps>(`${DEV_URL}/english/irregular`)
  return {
    props: {
      dataVerb,
      popularVerb,
      irregularVerb,
    },
  }
}

export default English
