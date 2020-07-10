export function checkWordValid(text: string): boolean {
  if (!text) {
    return false;
  }

  const wordRegex = /[a-z]+/gi;
  const isWord: boolean = text.length > 0 && wordRegex.test(text);
  const isSentence: boolean = text.split(' ').length > 1;

  return isWord && !isSentence;
}
