const Bob = function () {}

const silent = (msg) => {
    return msg.replace(/\s+/g, '') === ''
} 

const shouting = (msg) => {
    return msg.toUpperCase() === msg && /[A-Z]/.test(msg) 
}

const question = (msg) => {
    return msg.slice(-1)[0] === '?'
}

Bob.prototype.hey = function (msg) {

    if (silent(msg)) {
        return 'Fine. Be that way!'
    } else if (shouting(msg)) {
        return 'Whoa, chill out!'
    } else if (question(msg)) {
        return 'Sure.'
    } else {
        return 'Whatever.'
    }
}

module.exports = Bob