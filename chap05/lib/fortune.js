
const fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "You will have a pleasant surprise",
    "Whenever  possible, keep it simple.",
    "Mind over matter, is power over fist.",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]  
}