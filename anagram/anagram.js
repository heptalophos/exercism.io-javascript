class Anagram {

    constructor (subject) {
        this.subject = subject
    }

    isAnagram (str) {
        let s = str.toLowerCase().split('').sort().join('')
        let sub = this.subject.toLowerCase().split('').sort().join('')
        return (s === sub) ? true : false
    }

    isSame (str) {
        return str.toLowerCase() === this.subject.toLowerCase()
    }

    matches(lst) {
       lst = Array.isArray(lst) ? lst : [].slice.call(arguments, 0)
       return lst.filter ( str => { return !this.isSame(str) && this.isAnagram(str) } ) 
    }

}

module.exports = Anagram
