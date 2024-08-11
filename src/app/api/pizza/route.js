import dbConnect from "../../lib/dbConnect";
import { NextResponse } from "next/server";
import Pizza from "../../../model/Pizza.model.js"; 


export async function POST(req, res, next) {
    const {name, type, description, price, crust, img} = await req.json();

    // Validate input fields
    if ([name, type, description, price, crust].some((field) => field === "" || field === undefined)) {
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

export async function GET(req, res, next) {

  // Ensure the database connection is established
  await dbConnect();

  try {
    const allPizza = await Pizza.find({});
    
    return NextResponse.json({ message: "Pizzas retrieved successfully", allPizza });
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    return NextResponse.json({ error: "Failed to retrieve pizzas" }, { status: 500 });
  }
}

export async function PUT(req, res, next){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); // Retrieve the 'id' from the query string

    const {name, type, description, price, crust, img} = await req.json();

    if ([name, type, description, price, crust].some((field) => field === "" || field === undefined)) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await dbConnect();

    try {
      const pizza = await Pizza.findByIdAndUpdate(id, {
          img:img,
          name:name,
          type:type,
          description:description,
          price:price,
          crust:crust,
      }, {new: true});

      if(!pizza){
        return NextResponse.status(404).json({error: "Pizza not found"});
      }

      return NextResponse.json({ message: "Pizza updated successfully", pizza });
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
    const pizza = await Pizza.findByIdAndDelete(id);

    if(!pizza){
      return NextResponse.status(404).json({error: "Pizza not found"});
    }

    return NextResponse.json({ message: "Pizza deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete pizza" }, { status: 500 });
  }
}