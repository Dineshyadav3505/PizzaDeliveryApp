import dbConnect from "../../lib/dbConnect";
import { NextResponse } from "next/server";
import Beverages from "../../../model/Beverages.model.js"; 


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
      const beverages = await Beverages.create({
          img:img,
          name:name,
          type:type,
          description:description,
          price:price,
      });

      await beverages.save();
      return NextResponse.json({ message: "Beverages created successfully", beverages });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to create Beverages" });
  }

}

export async function GET(req, res, next) {

  // Ensure the database connection is established
  await dbConnect();

  try {
    const allbeverages = await Beverages.find({});
    
    return NextResponse.json({ message: "Beverages retrieved successfully", allbeverages });
  } catch (error) {
    console.error("Error fetching Beverages:", error);
    return NextResponse.json({ error: "Failed to retrieve Beverages" }, { status: 500 });
  }
}

export async function PUT(req, res, next){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); // Retrieve the 'id' from the query string

    const {name, type, description, price, img} = await req.json();

    if ([name, type, description, price,].some((field) => field === "" || field === undefined)) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await dbConnect();

    try {
      const beverages = await Beverages.findByIdAndUpdate(id, {
          img:img,
          name:name,
          type:type,
          description:description,
          price:price,
      }, {new: true});

      if(!beverages){
        return NextResponse.status(404).json({error: "Beverages not found"});
      }

      return NextResponse.json({ message: "Beverages updated successfully", beverages });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to update beverages" });
  }
}

export async function DELETE(req, res, next){
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id'); // Retrieve the 'id' from the query string

  await dbConnect();

  try {
    const beverages = await Beverages.findByIdAndDelete(id);

    if(!beverages){
      return NextResponse.status(404).json({error: "Beverages not found"});
    }

    return NextResponse.json({ message: "Beverages deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete Beverages" });
  }
}