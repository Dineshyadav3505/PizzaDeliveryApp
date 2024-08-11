import dbConnect from "../../lib/dbConnect.js";
import { NextResponse } from "next/server";
import User from "../../../model/User.model.js"; 


export async function POST(req, res, next) {
    const {firstname, lastname, phone } = await req.json();

    // Validate input fields
    if ([firstname, lastname, phone ].some((field) => field === "" || field === undefined)) {
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
      const user = await User.create({
        firstname:firstname,
        lastname:lastname,
        phone:phone,
      });

      await user.save();
      return NextResponse.json({ message: "user created successfully", user });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to create user" });
  }
}

export async function GET(req, res, next) {

  // Ensure the database connection is established
  await dbConnect();

  try {
    const allsandwich = await Sandwich.find({});
    
    return NextResponse.json({ message: "Sandwich retrieved successfully", allsandwich});
  } catch (error) {
    console.error("Error fetching sandwich:", error);
    return NextResponse.json({ error: "Failed to retrieve sandwich" }, { status: 500 });
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
      const sandwich = await Sandwich.findByIdAndUpdate(id, {
          img:img,
          name:name,
          type:type,
          description:description,
          price:price,
      }, {new: true});

      if(!sandwich){
        return NextResponse.status(404).json({error: "Sandwich not found"});
      }

      return NextResponse.json({ message: "Sandwich updated successfully", sandwich });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to update Sandwich" });
  }
}

export async function DELETE(req, res, next){
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id'); // Retrieve the 'id' from the query string

  await dbConnect();

  try {
    const sandwich = await Sandwich.findByIdAndDelete(id);

    if(!sandwich){
      return NextResponse.json({error: "Sandwich not found"});
    }

    return NextResponse.json({ message: "Sandwich deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete Sandwich" });
  }
}
