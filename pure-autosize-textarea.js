// VANILLA
const element = document.querySelector('#autosize-textarea')
element.addEventListener('input', autoSize, false);
const TEXTAREA_CONFIG = {
    LINE_HEIGHT: 13, // adjust textarea lineheight
    PADDING: 0  // adjust textarea padding vertical
}
function autoSize() {
    if (element) {
        element.setAttribute('rows', 2) // minimum rows
        const height = parseInt((element.scrollHeight - TEXTAREA_CONFIG.PADDING) / TEXTAREA_CONFIG.LINE_HEIGHT)
        if (height !== parseInt(element.getAttribute('rows'))) {
            element.setAttribute('rows', height)
        }
    }
}