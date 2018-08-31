class BeerSong {
    
    constructor () {}

    bottlesOfBeerWall (n) {
        return (n > 1) ? " bottles of beer on the wall" : 
               (n > 0) ? " bottle of beer on the wall" : "no more bottles of beer on the wall"
    }

    bottlesOfBeer (n) {
        return (n > 1) ? " bottles of beer" : " bottle of beer"
    }

    inTheEnd () {
        return "No more bottles of beer on the wall, no more bottles of beer.\n" + 
               "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    }

    takeOneDown (n) {
        if (n === 0) {
            return this.inTheEnd()
        }
        return (n > 1) ? "Take one down and pass it around" : "Take it down and pass it around" 
    }

    verse (n) {
        if (n == 0) {
            return this.inTheEnd()
        } else if (n === 1) {
            return n + this.bottlesOfBeerWall(n) + ", " + n + this.bottlesOfBeer(n) + ".\n" +
                   this.takeOneDown(n) + ", " + this.bottlesOfBeerWall(n-1) + ".\n" 
        } else {
            return n + this.bottlesOfBeerWall(n) + ", " + n + this.bottlesOfBeer(n) + ".\n" +
                   this.takeOneDown(n) + ", " + (n - 1) + this.bottlesOfBeerWall(n-1) + ".\n"
        }
    }

    sing (...args) {
        let song = ""
        if (args.length > 1) {
            for (var i = args[0]; i >= args[1]; --i) {
            song += this.verse (i) + "\n";
            }
        } else {
            for (var i = args[0]; i >= 0; --i) {
            song += this.verse (i) + "\n";
            }
        }
        return song.slice(0, -1);
    }

}

module.exports = BeerSong