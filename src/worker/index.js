import '@babel/polyfill';

async function StartWorker() {}

StartWorker().then(worker => {
    console.log(`Worker started`);
});
