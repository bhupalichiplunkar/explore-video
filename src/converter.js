const covertStringToObject = subtitle => {
  const subtitlesTemp = subtitle.split("\n\n");
  const regexp = /\d{2}:\d{2}:\d{2}/gm;
  const subTitles = [];
  subtitlesTemp.forEach(x => {
    const temp = x.split("\n");
    const [start, end] = temp[1].match(regexp);
    let startKey = start.split(":")[2];
    let endKey = end.split(":")[2];
    subTitles.push({
      start: parseInt(startKey, 10),
      end: parseInt(endKey, 10),
      text: temp[2]
    });
  });
  return subTitles;
};

// const srtToObj = srt => {
//   const regexp = /\d{2}:\d{2}:\d{2}/gm;
//   return srt.split("\n\n").map(x => {
//     const temp = x.split("\n");
//     const [start, end] = temp[1].match(regexp);
//     return { start, end, content: temp[2] };
//   });
// };

export default covertStringToObject;
