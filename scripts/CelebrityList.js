import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()
document.addEventListener(
    "click", 
    (theEvent) => {
       const theTarget = theEvent.target

       if(theTarget.dataset.type === "celebrity"){
        window.alert(`This Celebrity is a ${theTarget.dataset.sport} star`)
       }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    id="star--${star.id}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}
