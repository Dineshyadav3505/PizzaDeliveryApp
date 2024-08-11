import dbConnect from "../../lib/dbConnect.js";
import { NextResponse } from "next/server";
import Burger from "../../../model/Burger.model.js"; 


export async function POST(req, res, next) {
    const {name, type, description, price, img} = await req.json();

    // Validate input fields
    if ([name, type, description, price].some((field) => field === "" || field === undefined)) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // //Validate input images
    // if(!req.files?.img){
    //     return NextResponse.status(400).json({error: "Image is required"});
    // }

    // Upload image to cloudinary


    // Connect to database
    await dbConnect();

    try {
      const burger = await Burger.create({
          img:img,
          name:name,
          type:type,
          description:description,
          price:price,
      });

      await burger.save();
      return NextResponse.json({ message: "Pizza created successfully", burger });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to create pizza" });
  }

}

export async function GET(req, res, next) {

  // Ensure the database connection is established
  await dbConnect();

  try {
    const allburger = await Burger.find({});
    
    return NextResponse.json({ message: "Pizzas retrieved successfully", allburger });
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    return NextResponse.json({ error: "Failed to retrieve pizzas" }, { status: 500 });
  }
}

export async function PUT(req, res, next){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); // Retrieve the 'id' from the query string

    const {name, type, description, price, img} = await req.json();

    if ([name, type, description, price].some((field) => field === "" || field === undefined)) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await dbConnect();

    try {
      const burger = await Burger.findByIdAndUpdate(id, {
          img:img,
          name:name,
          type:type,
          description:description,
          price:price,
      }, {new: true});

      if(!burger){
        return NextResponse.status(404).json({error: "Burger not found"});
      }

      return NextResponse.json({ message: "Pizza updated successfully", burger });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to update pizza" });
  }
}

export async function DELETE(req, res, next){
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id'); // Retrieve the 'id' from the query string

  await dbConnect();

  try {
    const burger = await Burger.findByIdAndDelete(id);

    if(!burger){
      return NextResponse.json({error: "burger not found"});
    }

    return NextResponse.json({ message: "burger deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete burger" });
  }
}