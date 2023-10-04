function cleanSet(set, startString) {
    if (typeof startString !== 'string' || typeof set !== 'object') return '';
    return [...set]
            .filter((x) => x.startsWith(startString))
            .map((x) => x.slice(startString.length))
            .join('-');
}

export default cleanSet;
