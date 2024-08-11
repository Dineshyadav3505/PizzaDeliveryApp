import dbConnect from "../../lib/dbConnect";
import { NextResponse } from "next/server";

export function POST(req, res, next) {

}

export function GET(req, res, next) {

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

