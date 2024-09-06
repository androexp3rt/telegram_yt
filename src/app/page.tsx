"use client"
import { useState,useEffect } from "react";

export default function Home() {
  const [vidId,setVidId] = useState("7utxCRasgKc");
  const [currentIdIndex, setCurrentIdIndex] = useState(0);
  const [ids,setIds] = useState(["7utxCRasgKc","JVMFHP8CxZQ","biZBRR_cv9o","xGIIQOFwUNc","C8woWtVN3_g","uP79KgEYGN0","IOP4Yp080bw","sUoy0om-BvY"]);
  const [time,setTime] = useState([60000,840000,60000,780000,60000,3060000,60000,2280000]);
  // const [time,setTime] = useState([60000,60000,60000]);
  function update() {
    const intervalId = setInterval(() => {
      // Calculate the index of the next item
      const nextIndex = (currentIdIndex + 1) % ids.length; // Circularly access elements
      setCurrentIdIndex(nextIndex);
      setVidId(ids[nextIndex]);
    }, time[currentIdIndex]);
    return () => clearInterval(intervalId);
  }
  useEffect(() => {
    update();
  },[vidId]);
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center p-24">
      <iframe className="h-48 md:h-videomd lg:h-videolg w-80 md:w-videomd lg:w-videolg" id="ytplayer" src={`https://www.youtube.com/embed/${vidId}?autoplay=1&mute=1`}>
      </iframe>
      {/* <button className="bg-white p-2 mt-5 rounded-lg" onClick={update}>Next</button> */}
    </main>
  );
}
