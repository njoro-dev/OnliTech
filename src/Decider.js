export function generateRandomOutcome() {
    const currentTime = new Date().getTime();
    const randomSeed = currentTime % 2 + 1;
    return randomSeed;
}

