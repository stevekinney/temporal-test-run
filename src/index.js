const { Connection } = require('@temporalio/client');

const connection = new Connection();

const createWorkflow = async (number) => {
  const workflow = connection.workflow('example', {
    taskQueue: 'double-square',
  });

  const result = await workflow.start(number);

  console.log(result);

  return result;
};

const generateNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  return Promise.all(numbers.map(createWorkflow));
};

const run = async () => {
  const numbers = await generateNumbers();
  console.log({ numbers });
};

run();
