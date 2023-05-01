function Validation(){

return typeof number === 'number' && !isNaN(number);

}




function addThemAll(){

    let result = 0;
   
    for (let i = 0; i < arguments.length; i++) {
      const number = arguments[i];

      if (Validation(number)){
      result += number;}
    }
  
    return result;
}
console.log(addThemAll(2,4)); // 6*
console.log(addThemAll(1,2,3,4)); // 10*
console.log(addThemAll(5,5,10)); // 20*


/// TASK 2



function multiply(a) {

  if (!Validation(a)){

    return 'Invalid number';
  }

  return function(b){

    if (!Validation(b)){

      return 'Invalid number';
    }

    return a * b;
  }

}
console.log(multiply(5)(5))		// 25*
console.log(multiply(2)(-2))	        // -4*
console.log(multiply(4)(3))		// 12*

/// TASK 3

const movies = [
    {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
    },
    {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
    },
    {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
    },
    {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
    },
    ];
    

    const sort_property = {

      name: 'movieName',
      release: 'releaseYear',
      director: 'directedBy',
      duration: 'runTimeInMinutes'

    };

    const sort_order = {

      asc: '>',
      desc: '<'
    }

    const sort_order_values = {

      [sort_order.asc]: 1,
      [sort_order.desc]: -1
    }

    function byProperty(property, direction) {
      const validProperties = Object.values(sort_property);


      if (!validProperties.includes(property)){
        return 'Invalid property';

      }

      const validOrders = Object.values(sort_order);

      if (!validOrders.includes(direction)){

        return 'Invalid direction'
      }

      const orderValue = sort_order_values[direction];

      return (a, b) => a[property] ? orderValue : -1 * orderValue;
    }
    console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
    console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
    console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
