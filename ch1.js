// Challege N1: Count words

async function getData() {
  const res = await fetch("https://codember.dev/data/message_01.txt");
  const data = await res.text();
  return data.replace("\n", "").split(" ");
}

function countWords(data) {
  return data.reduce((acc, cur) => {
    const current = cur.toLowerCase();
    const array = Array.isArray(acc) ? [...acc] : [{ name: acc, count: 1 }];
    const index = array.findIndex((i) => i.name === current);

    if (index > -1) {
      array[index].count++;
      return array;
    }

    array.push({ name: current, count: 1 });
    return array;
  });
}

function printWordsCounts(wordsArray) {
  let result = "";
  for (const { name, count } of wordsArray) {
    result += `${name}${count}`;
  }
  console.log(result);
}

(async () => {
  const data = await getData();
  const wordsArray = countWords(data);
  printWordsCounts(wordsArray);
})();
