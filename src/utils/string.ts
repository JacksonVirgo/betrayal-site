export function capitlizeWords(str: string) {
    const words = str.split(" ");
    const capitalizedWords = words.map((word) => {
        const value = word[0] ?? "";
        return value.toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
}
