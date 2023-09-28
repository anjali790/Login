import { connect } from "../../../../dbConfig/dbCongig";

import  User  from "../../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";

// import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    //check if user already exists
    const user = await User.findOne({ email });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

connect();
