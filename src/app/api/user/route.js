
export default function hand (){
    console.log('Hello, Handlers!');
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello, Handlers!' }),
    };
}