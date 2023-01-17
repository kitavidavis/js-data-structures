/**
 * 
 * @param {number[]} candidates  - candidate numbers we are picking from
 * @param {number} remainingSum  - remaining sum after adding candidates to currentCombination
 * @param {number[][]} finalCombinations  - resulting list of combinations
 * @param {number[]} currentCombination - currently explored candidates
 * @param {number} startFrom - index of the candidates to start further exploration from
 * @return {number[][]}
 */
function combinationSumRecursive(
    candidates,
    remainingSum,
    finalCombinations = [],
    currentCombination = [],
    startFrom = 0,
) {
    if(remainingSum < 0) {
        return finalCombinations;
    }

    if(remainingSum === 0) {
        finalCombinations.push(currentCombination.slice());
        return finalCombinations;
    }

    // If we haven't reached zero yet, lets continue to add all
    // possible candidates that are left
    for(let candidateIndex = startFrom; candidateIndex < candidates.length; candidateIndex += 1) {
        const currentCandidate = candidates[candidateIndex];

        // lets try to add another candidate
        currentCombination.push(currentCandidate);

        // Explore further option with current candidate being added.
        combinationSumRecursive(
            candidates,
            remainingSum - currentCandidate,
            finalCombinations,
            currentCombination,
            candidateIndex
        );

        //backtracking
        // lets get back, exclude current candidate and try another ones later
        currentCombination.pop();
    }

    return finalCombinations;
}

function combinationSum(candidates, target) {
    console.log(combinationSumRecursive(candidates, target));
}

combinationSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 100);