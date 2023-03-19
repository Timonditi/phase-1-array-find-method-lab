function superbowlWin(record){
    const win = record.find((game) => game.result === 'W');

    return win ? win.year : undefined;
}
const broncosRecord = [
    { year: 1998, result: 'W' },
    { year: 1999, result: 'L' },
    { year: 2016, result: 'W' }
  ];
  
  console.log(superbowlWin(broncosRecord)); // Output: 1998
  