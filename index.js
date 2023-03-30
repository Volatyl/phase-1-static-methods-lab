class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(string) {
    const excludedWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const words = string.split(" ");
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      if (i === 0 || !excludedWords.includes(word)) {
        newWords.push(word.charAt(0).toUpperCase() + word.slice(1));
      } else {
        newWords.push(word);
      }
    }
    return newWords.join(" ");
  }
}

let text = "my name is ken an dj";
Formatter.titleize(text);
