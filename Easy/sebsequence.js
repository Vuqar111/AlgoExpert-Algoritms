function isvalidsebsequence(array, sebsequence) {
    let seqIdx = 0;
    for (let value of array){
        if(seqIdx == sebsequence.length) {break}
        if(value === sebsequence[seqIdx]){
            seqIdx++;
        }
        return seqIdx === sebsequence.length;
    }
}

