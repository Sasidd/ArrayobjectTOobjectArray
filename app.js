//console.log("hi");

// async function test(){
// let xx=[1,2,3,4,5,6]
// let api = await fetch('https://mocki.io/v1/fcf2152e-707f-43c4-bb50-43c2ff29e697')
// let data = await api.json()
// console.log(data)
// let filteredData=data.filter(element=>element!=null && element.age>=18)
// console.log('filter=>',filteredData);
// // const removeGrp = filteredData.map(({group,...rest}) => ({...rest}));
// // console.log('RemoveGroup==>',removeGrp);
// let groupedData = {};
// filteredData.map(element => {
// if (!groupedData[element.group]) {
// groupedData[element.group] = [];
// }
//     groupedData[element.group].push({
//         age:element.age,
//         name:element.name
//     });
//     //groupedData[element.group].push(element);
//  });
//     console.log('Grouped and filtered data:', groupedData);
// }

// test()


let promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved After 5 sec");
    }, 5000);
  });
  let promise2 = Promise.resolve(33);
  let prom3 = new Promise((resolve,reject)=>{
    if(5>2){
        resolve('IT is True')
    }
    else{
        reject('it is not true')
    }
  })

//prom3.then(data=>console.log('succes',data))
//prom3.catch(err=>console.log(err))
  
 let retuendPromise = Promise.all([promise1, promise2 , prom3]);
  retuendPromise.then(values =>{
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
  });

// Promise.all(([promise1,promise2,prom3])=>{
// console.log(promise1);
// console.log(promise2);
// console.log(prom3);
// })

  