"use client"
import { useState,useEffect } from "react";

export default function Home() {
  const [vidId,setVidId] = useState("JVMFHP8CxZQ");
  const [currentIdIndex, setCurrentIdIndex] = useState(0);
  const [ids,setIds] = useState(["JVMFHP8CxZQ","xGIIQOFwUNc","uP79KgEYGN0"]);
  const [time,setTime] = useState([840000,780000,3060000])
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the index of the next item
      const nextIndex = (currentIdIndex + 1) % ids.length; // Circularly access elements
      setCurrentIdIndex(nextIndex);
      setVidId(ids[nextIndex]);
    }, time[currentIdIndex]);
    return () => clearInterval(intervalId);
  }, [vidId]);
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center p-24">
      <iframe className="h-48 md:h-videomd lg:h-videolg w-80 md:w-videomd lg:w-videolg" id="ytplayer" src={`https://www.youtube.com/embed/${vidId}?autoplay=1&mute=1&loop=1`}>
      </iframe>
    </main>
  );
}
