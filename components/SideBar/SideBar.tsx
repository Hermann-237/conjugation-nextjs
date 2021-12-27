import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Typography from '../Common/Typography'
import SideBarMessages from './SideBarMessages'
import { SidebarStyledUI } from '../Common/Responsive/CardContainer.style'
import EnglishPopularVerb, { EnglishPopularVerbProps } from '../PopularVerbs/EnglishPopularVerb'

const Base = styled(SidebarStyledUI)(tw`rounded-xl`)
const Container = styled.div(tw`px-8 py-4 border w-full rounded shadow-sm`)
const SideBar:React.FC<EnglishPopularVerbProps> = ({popularVerb}) => {
    return (
        <Base>
        <Container>
            <Typography variant='title' isSecondary>
                {SideBarMessages.title}
            </Typography>
        </Container>
         <EnglishPopularVerb popularVerb={popularVerb}/>
        </Base>
    )
}

export default SideBar
