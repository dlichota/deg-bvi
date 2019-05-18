function init() {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1otHB9ILUnlEcoLsW1YpOQ-iTjQ-RO_3jphaPvRrhebc/pubhtml',
        callback: function (data, tabletop) {
            console.log(data)
        },
        simpleSheet: true
    })
}
window.addEventListener('DOMContentLoaded', init)
