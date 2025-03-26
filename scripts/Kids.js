import { getChildren } from "./database.js"


export const Kids = () => {
    const children = getChildren()
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child,name}</li>`
    }

    html += "</ol>"
    return html
}

