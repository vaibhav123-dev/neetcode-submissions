class Solution {
    constructor() {
        this.map = new Map();
        this.counter = 0;
    }

    encode(longUrl) {
        const key = this.counter++;
        this.map.set(key, longUrl);
        return 'https://tinyurl.com/' + key;
    }

    decode(shortUrl) {
        const key = parseInt(shortUrl.replace('https://tinyurl.com/', ''));
        return this.map.get(key)
    }


}
