
let getLocalTime = async () => {
    const myDate = new Date()
    return myDate.toLocaleDateString()
}

module.exports = {
    getLocalTime        :   getLocalTime
}