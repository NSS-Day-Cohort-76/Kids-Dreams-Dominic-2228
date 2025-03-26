import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrityMatch = null

    for (const celebrity of celebrityArray) {
        for (const kid of kidObject) {
            if(celebrity.id === kid.celebrityId){
                celebrityMatch = kid
            }
        }
    };
        
return celebrityMatch
    }


export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kids, celebrities)
        html += `
            <li data-type="kid" data-id="${kid.celebrityId}">
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

