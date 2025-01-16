function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('done stretching')
      resolve()
    }, 1000)
  })
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('done running on treadmill')
      resolve()
    }, 500)
  })
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('done lifting weights')
      resolve()
    }, 2000)
  })
}

// refactor this function to handle Promises using async/await instead of
// .then and .catch
async function workout() {
  const stretch_log = await stretch()
  const run_log = await runOnTreadmill()
  const lift_log = await liftWeights()
  return 'done working out'
}
workout().then((result) => console.log(result))

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout()
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
