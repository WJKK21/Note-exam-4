  /*   
  let array = [1, 2, 3, 4, 5, 6, 7, 8]; 
  let arrayResult = [[null, null], [null, null], [null, null], [null, null]];
  2차원 배열
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    } else { 
      console.log(array[i]  + '  1,3,5,7이 나오나?');
    }
  } 

  1  1,3,5,7이 나오나?
  2
  3  1,3,5,7이 나오나?
  4
  5  1,3,5,7이 나오나?
  6
  7  1,3,5,7이 나오나?
  8
/////
  for (let i = 0; i<array.length; i++) {
      if(array[i] % 2 === 0) {
        arrayResult.push(array[i])
      } else {
        arrayResult.push(array[i])
      }
    }

  console.log(arrayResult)
  [Array(2), Array(2), Array(2), Array(2), 4, 6, 23, 5, 94, 35, 44, 66]
/////
for (let i = 0; i<array.length; i++) {

      if(array[i] % 2 === 0) {
        arrayResult[array[i] % 2].push(array[i])
      } else {
        arrayResult[array[i] % 2].push(array[i])
      }
    }
  console.log(arrayResult)
  
[null, null, 2, 4, 6, 8]
[null, null, 1, 3, 5, 7]
null도 값이구나

/////
 */


function exampleOne(first, second, dataType) {
    if(typeof(first)!== dataType && typeof(second) !== dataType){
      return new Error(`매개변수 first, second는 모두 ${datatype} 타입이어야 합니다.`);
    }
  }

  function arrayLengthEven(array) {
    if(array.length % 2 === 0) {
    return true;
    } else {
    return false;
    }
  }

function isExampleTwo(first, second){
  // Guide : exampleOne()함수를 호출하여 타입검사를 따로 합니다.
  // Guide : 타입검사가 실패하면 에러를 발생시켜 함수가 실행되지 않도록 조치합니다. 
  exampleOne(first, second);

  let booleanResult;

  if(first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }

  
  if(typeof(booleanResult) === 'boolean') {
    return booleanResult;
  } else {
    return new Error("조건식이 boolean이 아니어서 리턴 하지 못했습니다.");
  }
}

  let basicData =  [4,6,23,5,94,35,44,66]

  function exampleThree(array, functionOne, functionTwo) {

let arrayResult = [[null, null], [null, null], [null, null], [null, null]];


    for (let i = 0; i<array.length; i++) {
      if(array[i] % 2 === 0) {
        arrayResult.push(array[i])
      } else {
        indexOf.push(array[i])
      }
    }

  // 매개변수 array는 배열의 순서 한쌍씩 값의 크기를 비교하여
  // 비교한 작은 값은 arrayResult의 원소배열의 0번째
  // 큰 값은 arrayResult의 원소배열의 1번째에 넣어준다.
  return arrayResult;
  }

console.log(exampleThree(basicData, exampleOne, isExampleTwo));
// Q 위의 콘솔을 확인하여
// 함수 exampleThree()의 리턴값을 통해 재조립된 배열을 만드시오.


  // 매개변수 인자로 들어오는 함수 두개는 데이터타입이 모두 함수 여야 함
  // 매개변수 array의 모든 원소는 숫자 정수여야 함
  // 매개변수 array의 배열 길이(length)는 짝수여야 함, 홀수라면 10을 추가하여 짝수로 만듦
