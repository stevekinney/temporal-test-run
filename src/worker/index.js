const path = require('path');
const { Worker } = require('@temporalio/worker');

async function run() {
  const worker = await Worker.create({
    workDir: path.join(process.cwd(), 'src', 'worker'),
    taskQueue: 'double-square',
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
