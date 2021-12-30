import React from 'react'
import Header from '../../components/Header'
import { EnglishMessages } from '../../messages/EnglishMessages'


const EnglishIndex = () => {
  return (
    <>
      <Header
        title={EnglishMessages.title.english}
        descriptionContent={EnglishMessages.description.english}
        keywordsContent={EnglishMessages.key.english}
      />
    </>
  )
}

export default EnglishIndex
