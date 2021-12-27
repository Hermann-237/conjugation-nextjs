
import { styled as styledUI} from '@mui/material/styles';

const BaseStyled = {
    downMd:{
        display:'block',
    },
    upMd:{
        display:'flex',
        flexWrap:'wrap',
    },
}
export const BaseStyledUI = styledUI('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.up('xs')]: BaseStyled.downMd,
    [theme.breakpoints.up('sm')]: BaseStyled.upMd,
  }));
  const SidebarStyled = {
    downMd:{
        width:`${100}%`,
    },
    upMd:{
        width:`${20}%`,
    },
}
export const SidebarStyledUI = styledUI('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: SidebarStyled.downMd,
    [theme.breakpoints.up('md')]: SidebarStyled.upMd,
  }));
const CardBaseStyled = {
    downMd:{
        width:`${100}%`,
    },
    upMd:{
        width:`${80}%`,
    },
}
export const CardBaseStyledUI = styledUI('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: CardBaseStyled.downMd,
    [theme.breakpoints.up('md')]: CardBaseStyled.upMd,
  }));

const CardStyled = {
    upXs:{
        width:`${100}%`,
        marginTop: '1rem'
    },
    upSm:{
        width:`${100/2}%`,
    },
    upMd:{
        width:`${100/3}%`,
    }, 
}
export const CardUI = styledUI('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.up('xs')]: CardStyled.upXs,
    [theme.breakpoints.up('sm')]: CardStyled.upSm,
    [theme.breakpoints.up('md')]: CardStyled.upMd, 
  }));

const CardContainerStyled = {
    upXs:{
        display:'block',
    },
    upSm:{
        display:'flex',
        flexWrap:'wrap',
    },
}

 export const CardContainer = styledUI('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: CardContainerStyled.upXs,
    [theme.breakpoints.up('xs')]: CardContainerStyled.upSm,
  }));
