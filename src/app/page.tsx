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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <iframe id="ytplayer" width="640" height="360" src={`https://www.youtube.com/embed/${vidId}?autoplay=1&mute=1&loop=1`}>
      </iframe>
    </main>
  );
}
