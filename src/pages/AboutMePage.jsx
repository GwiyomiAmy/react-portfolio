import { useState, useEffect } from "react"


export default function AboutMePage(){
   return(
      <div>
      <h1>About Me</h1>
      <img src="/assets/face.png" alt="Amy's smiling face" className="my-photo" />
      <p>
        Welcome! My namy is Amy and I am the fourth born into a family of tech savvy people. Computers run in my family. They also run in my family. I consider myself the least tech savvy among my siblings, but that will soon change.
      </p>
      <p>
        I have many hobbies, including teaching the Bible, ballet, violin, sewing, crocheting, knitting, making jewelry, doing arts and crafts, listening to kpop, watching Korean dramas, learning languages, listening and watching to ASMR, solving Rubik's cubes of various cuts and shapes, trimming cat nails, and now desgning webpages, among other things.
      </p>
      <p>
        One goal I have with learning coding is to make an app, or at first a webpage, that will assist in helping me to be able to sightread on the violin by providing randomized notes on the sceen to play along with. There are many other details, but that will be seen once I make it.
      </p>
    </div>
   )
}