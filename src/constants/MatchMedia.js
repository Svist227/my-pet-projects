import pxToRem from "@/utils/pxToRem"

const MatchMedia = { 
    mobile: window.matchMedia(`(width <= ${pxToRem(767)}rem)`)      //для проверки текущей ширины экрана
}


export default MatchMedia