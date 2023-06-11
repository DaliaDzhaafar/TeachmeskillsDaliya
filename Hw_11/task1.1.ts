
const url1 = 'https://jsonplaceholder.typicode.com/posts'
async function getData(b:number) {
  const response = await fetch(url1);
  const response1 = await response.json();
  console.log(response1[b].userId)
  return response1
}

const Promise22 = async () => {
    await getData(15)
    .catch(() => {console.log(new Error("Error"))})
    await getData(23)
    .catch(() => {console.log(new Error("Error"))})
    await getData(7)
    .catch(() => {console.log(new Error("Error"))})
    await getData(3)
    .catch(() => {console.log(new Error("Error"))})
  }
 Promise22()
