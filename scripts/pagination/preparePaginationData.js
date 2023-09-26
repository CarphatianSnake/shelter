import { getRandomValue } from "../utils/utils.js";

function preparePaginationData(data) {

  // function that shuffles data array
  function shuffleArray(data) {
    const petsData = [...data];
    petsData.forEach((item, index) => {
      const randomIndex = getRandomValue(0, petsData.length - 1);
      const temp = item;
      petsData[index] = petsData[randomIndex];
      petsData[randomIndex] = temp;
    })
    return petsData;
  }

  const paginationDataArray = []; // data for pagination block

  // add our shuffled array to pagination data 6 times (we need 48 items, and our data have 8, so we need collect all 48 items)
  for (let i = 0; i < 6; i++) {
    let newArr = shuffleArray(data); // get shuffled data array

    if (paginationDataArray.length > 0) {
      // if pagination data array have items, we need to make this items urepeatable with for last 5 elements in data array

      // counter for shuffled array check
      let i = 0;

      // check every element inside shuffled array (8 is a number of items at initial state of shuffled array)
      while (i < 8) {

        const lastFiveIds = paginationDataArray.slice(-5).map(item => item.id); // take id's of last 5 elements in data array on every iteration

        // if first elements id in shuffled array not includes in last 5 elements, we add first element from shuffled array to pagination data array
        if (!lastFiveIds.includes(newArr[0].id)) {
          const newElement = newArr.shift() // get first element from shuffled array and remove this element from array
          paginationDataArray.push(newElement); // add first element of shuffled array to pagination data array
          i++; // increase counter by 1
        }

        else {
          newArr = newArr.slice(1).concat(newArr[0]); // if first elements id in shuffled arra includes inside last 5 elements of pagination data array, we move this element to the end of shuffled array
        }
        
        // iteration will repeat until shuffled array became empty (and our counter = 8)
      }

    } else {
      // if our pagination data array empty (initial state), just add shuffled array
      paginationDataArray.push(...newArr);

    }
  }

  // return pagination data array
  return paginationDataArray;
}

export default preparePaginationData;