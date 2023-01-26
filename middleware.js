
import { NextResponse } from "next/server";

export default function middleware(req){
  const verify = req.cookies.get("loggedin");
  const url = req.url

  if(verify && url.includes('/dashboard')){
    return NextResponse.redirect("/signin")
  }
}