
import { styled as styledUI} from '@mui/material/styles';


const CardStyled = {
    downSm:{
        width:'100%',
        marginTop: '1rem'
    },
    upSm:{
        width:'49%',
    },
    upMd:{
        width:'32.3%',
    },
    upLg:{
        width:'24%',
    } 
}
export const CardUI = styledUI('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: CardStyled.downSm,
    [theme.breakpoints.up('sm')]: CardStyled.upSm,
    [theme.breakpoints.up('md')]: CardStyled.upMd,
    [theme.breakpoints.up('lg')]: CardStyled.upLg, 
  }));

const CardContainerStyled = {
    downSm:{
        display:'block',
    },
    upSm:{
        display:'flex',
        flexWrap:'wrap',
        gap:'1rem'
    }
}

 export const CardContainer = styledUI('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: CardContainerStyled.downSm,
    [theme.breakpoints.up('sm')]: CardContainerStyled.upSm,
  }));

/* 
import React from 'react'
import ContainerUI from './Responsive/CardContainer.style'

const CardContainer:React.FC = ({children}) => {
  return (
    <ContainerUI>
      {children}
    </ContainerUI>
  )
}

export default CardContainer
*/