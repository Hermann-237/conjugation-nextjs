import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import Typography from '../../components/Common/Typography'
import { CardContainer, CardUI } from '../../components/Common/Responsive/CardContainer.style'
import data from '../Data/data'

export type DataType ={
    verbList: {
    result: string
    infinitif: string
    passeGroup: string
    partiticipe_passe: string
    partiticipe_present: string
    model: string
    auxiliary: string
    other_forms: string
    verbes: {
        mode: string
        conjugation_forms: {
            title: string
            mode_array: string[]
        }[]
    }[]
}[]
} 

const CardBase = styled.div(tw`p-4 shadow mt-4 rounded`)
const CardUIStyled = styled(CardUI)(tw`p-4 shadow rounded bg-common`)
const CardItem = styled.div(tw`px-4 flex justify-start gap-x-2 gap-y-0`)
const CardVerb = ({verbList}:DataType) => {
    return (
        <CardBase>
            {
                verbList[0].verbes.map(({conjugation_forms,mode},index)=>(
                  <React.Fragment key={index}>
                     <Typography uppercase variant='header'isSecondary center paddingY={4}> {mode} </Typography>
                     <CardContainer>
                         {
                             conjugation_forms.map(({title,mode_array},formIndex)=>(
                                <CardUIStyled key={`${title}-${index}-${formIndex}`}>
                                   <Typography variant='text' isSecondary paddingX={4} uppercase paddingY={4}>{title}</Typography>
                                   {
                                       mode_array.map((item,verbIndex)=>{
                                           const [firstItem,...restItem] = item.split(' ')
                                          return(
                                             <CardItem key={`${item}-${verbIndex}`}>
                                               <Typography variant='text' isTertiary center>{firstItem}</Typography>
                                               {
                                                   restItem.map((element,indexEl)=>(
                                                       <Typography variant='text' isSecondary center key={`${element}-${indexEl}`}>{element}</Typography>
                                                   ))
                                               }
                                             </CardItem>
                                          )
                                       })
                                   }
                                </CardUIStyled>
                             ))
                         }
                     </CardContainer>
                  </React.Fragment>
                ))
            }
       </CardBase>
    )
}

export default CardVerb
