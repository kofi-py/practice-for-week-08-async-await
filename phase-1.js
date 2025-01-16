async function stretch() {
  console.log('done stretching')
}

async function runOnTreadmill() {
  console.log('done running on treadmill')
}

async function liftWeights() {
  console.log('done lifting weights')
}

async function workout() {
  const stretch_log = await stretch() // Executes stretch and logs once
  const run_log = await runOnTreadmill() // Executes runOnTreadmill and logs once
  const lift_log = await liftWeights() // Executes liftWeights and logs once
  console.log('done working out')
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
