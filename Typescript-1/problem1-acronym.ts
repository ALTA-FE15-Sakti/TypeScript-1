function acronym(phrase: string): string {
    const words: string[] = phrase.split(' ');
    let acronyms: string = '';
  
    for (const word of words) {
      acronyms += word[0].toUpperCase();
    }
  
    return acronyms;
  }
