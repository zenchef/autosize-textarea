// Pure JavaScript
function autoSize() {
    if (this) {
        this.setAttribute('rows', 2) // minimum rows
        const rowsRequired = parseInt((this.scrollHeight - TEXTAREA_CONFIG.PADDING) / TEXTAREA_CONFIG.LINE_HEIGHT)
        if (rowsRequired !== parseInt(this.getAttribute('rows'))) {
            this.setAttribute('rows', rowsRequired)
        }
    }
}