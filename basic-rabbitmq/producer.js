const amqp = require('amqplib');

const init = async () => {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'dicoding';
    const message = 'Happy study message broker!';

    await channel.assertQueue(queue, {
        durable: true
    });

    await channel.sendToQueue(queue, Buffer.from(message));
    console.log('Message sent!');

    setTimeout(() => {
        connection.close();
    }, 1000);
};

init();