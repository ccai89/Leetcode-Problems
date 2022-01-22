const solution = (paragraphs, align, width) => {
  // used for header and footer
  const start_end = '*'.repeat(width + 2);
  
  // our result
  const output = [];

  // adding header
  output.push(start_end);
  
  // iterate through the array of arrays
  for(let i = 0; i < paragraphs.length; i++){
    // Each potential line if it doesn't over flow;
    const line = paragraphs[i];

    // helper method
    const alignText = (align, text) => {
      let pLine = '*';
      let spacing = text.length < width ? ' '.repeat(width-text.length) : '';
      if(align === 'LEFT'){
        pLine += text + spacing;
      }
      else {
        pLine += text;
      }
      output.push(pLine + '*');
    }

    // iterate through string in subarray
    let word = ' '
    for(let j = 0; j < line.length; j++) {
      while(line[j+1] && line[j+1].length + word.length < width){
        word += line[j] + ' ';
        
      }

      word
    }

  }
  // adding footer
  output.push(start_end);
  return output;
  
  
    // const helper = (_line, _align) => {
    //   if(totalLength === width){
    //     let str = '*';
    //     _line.forEach(el => str += el + ' ');
    //     output.push(str.slice(0,-1) + '*');
    //   }
    //   else{
    //     if(_align === 'LEFT'){
    //       let str = '*';
    //       _line.forEach(el => str += el + ' ');
    //       output.push(str.slice(0,-1)  + ' '.repeat(width - totalLength) + '*');
    //     }
    //     if(_align === 'RIGHT'){
    //       let str = '*';
    //       str += ' '.repeat(width - _line[0].length);
    //       _line.forEach(el => str += el + ' ');
    //       output.push(str.slice(0,-1)  + '*');
    //     }
    //   }
    // };

};
  
 console.log(solution([['hello', 'world'], 
                       ['how', 'areYou', 'doing'], 
                       ['Please look', 'and align', 'to right']],
                       ["LEFT", "RIGHT", "RIGHT"],
                       16));
 