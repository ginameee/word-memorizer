export function checkWordValid(text: string): boolean {
    const wordRegex = /[a-z]+/gi;

    return wordRegex.test(text);
}