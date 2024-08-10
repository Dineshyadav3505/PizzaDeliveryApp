// app/api/hello/route.js
// /pages/api/hello.js (or .ts if using TypeScript)

export default function handler(req, res) {
    res.status(200).json({ message: 'Hello, world!' });
    console.log("hello world")
  }