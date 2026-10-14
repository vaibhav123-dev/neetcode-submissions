class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
         if (s.length != t.length) return false;

    let lastSeenS = new Array(256).fill(-1);
    let lastSeenT = new Array(256).fill(-1);

    for (let i = 0; i < s.length; i++) {
        let codeS = s.charCodeAt(i);
        let codeT = t.charCodeAt(i);

        if (lastSeenS[codeS] !== lastSeenT[codeT]) {
            return false;
        }

        lastSeenS[codeS] = i;
        lastSeenT[codeT] = i;
    }

    return true;
    }
}
