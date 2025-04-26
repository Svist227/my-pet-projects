import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector"

const GetParams = (element, dataAttrSelector) => {
    
    return JSON.parse(
        element.getAttribute(  
            getAttrNameFromSelector(dataAttrSelector))
    )
}

export default GetParams