function makeReq(location) {
  return new Promise((res, rej) => {
    
    console.log(`Making request to ${location}`);
    
    if (location === 'Google') {
      res("Google says hi")
    } else {
      rej("We cand only talk to Google")
    }
  })
    
}
function procceseReq(response) {
  return new Promise((res, rej) => {
    console.log(`Proccessing response`);
    
    res(`Extra info + ${response}`)
  })
}
// makeReq("Google").then(res => {
//   console.log('Response Received');
//   return procceseReq(res)
  
// }).catch(err => {
//   console.log(err);
  
// })

async function doWork() {
  const r = await makeReq("Google")
  console.log('Response riceved');
  
  const pr = await procceseReq(r)
  console.log(pr);
  
}
doWork()