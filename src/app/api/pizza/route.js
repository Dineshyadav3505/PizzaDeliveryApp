import dbConnect from "../../lib/dbConnect";
import { NextResponse } from "next/server";
import Pizza from "../../../model/Pizza.model.js"; 

export async function POST(req, res, next) {
    const {name, type, description, price, crust, img} = req.body;
    console.log("data:", name, type, description, price, crust, img);

    // Validate input fields
    if([name, type, description, price, crust].some(
        (field) => field?.trim() === ""
    )){
        return NextResponse.status(400).json({error: "All fields are required"});
    }
    console.log("data:", name, type, description, price, crust, img);


    // //Validate input images
    // if(!req.files?.img){
    //     return NextResponse.status(400).json({error: "Image is required"});
    // }

    // Upload image to cloudinary


    // Connect to database
    await dbConnect();

    try {
      const pizza = await Pizza.create({
          img:img,
          name:name,
          type:type,
          description:description,
          price:price,
          crust:crust,
      });

      await pizza.save();
      return NextResponse.json({ message: "Pizza created successfully", pizza });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to create pizza" });
  }

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