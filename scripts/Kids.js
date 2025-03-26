import { getChildren, getCelebrities } from "./database.js"
const children = getChildren()
document.addEventListener(
    "click", 
    (theEvent) => {
        const theTarget = theEvent.target

        if(theTarget.dataset.type === "child"){
            const celebs = getCelebrities()
            for (const celeb of celebs) {
                debugger
                if(celeb.id === parseInt(theTarget.dataset.celebid)){
               return window.alert(`${theTarget.dataset.name} will be making memories with ${celeb.name}, a ${celeb.sport} star, by ${theTarget.dataset.wish}`)
                }
            }
        }
    }
)


export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-name="${child.name}"data-celebid="${child.celebrityId}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

