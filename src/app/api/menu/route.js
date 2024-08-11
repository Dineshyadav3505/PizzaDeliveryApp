import { NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect";


export function GET(){
  dbConnect();
  const  user=[
    {
      name:"user",
      age:18,
      email:"user@gmail.com"
    },
    {
      name:"admin",
      age:30,
      email:"admin@gmail.com"
    }
  ];

  return NextResponse.json(user);
}