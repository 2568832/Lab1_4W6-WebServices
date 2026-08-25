
"use client"; // Obligatoire dans Next.js pour utiliser useState

import { useState } from "react";
import Image from "next/image";
import { Towel } from "./_types/Towel";
import { Potato } from "./_types/Potato";




export default function Home() {
  
  const [myWisdom, setMyWisdom] = useState("Les biscuits c'est trop bon!");
  const [n, setN] = useState(12);
  const[ myTowel, setMyTowel] = useState (new Towel('brun', 1.2, 'towelie.jpg'));

  const [TestList, setTestList] = useState<string[]>([
  "Étudiant 1",
  "Étudiant 2",
  "Étudiant 3",
  

  ]);
const [potatoList, setPotatoList] = useState<Potato[]>([
    new Potato(true, 6.9),
    new Potato(false, 6.7)
  ]);
  
  function bruh(): string {
    return "Bruh.";
  }

  
  function equalToN(valeur: number): string {
    if (valeur === n) {
      return "Identique";
    } else {
      return "Différent";
    }
  }
 
  return (
    <div className="m-auto w-3xl">

      
      
        <div className="flex mt-1">
        <div className="flex-1 p-1 bg-pink-100">
          {n}
        </div>
        <div className="flex-3 p-1 bg-blue-100">
          {myWisdom}
        </div>
      </div>

      
      <div className="flex mt-1">
        <div className="flex-1 p-1 esprit-mental-cadran">
          {bruh()}
        </div>
        <div className="flex-3 p-1 bg-blue-100">
          {equalToN(12)}
        </div>
      </div>

      <div className="flex mt-1">
        <div className="flex-1 p-1 esprit-mental-cadran">
          <ul className="list-disc ml-5">
            <li>{TestList[0]}</li>
            <li>{TestList[1]}</li>
            <li>{TestList[2]}</li>
          </ul>
          <ul className="list-disc ml-5 text-xs mt-4">
        {potatoList.map((potato, index) => (
          <li key={index}>
            Patate {potato.isPretty ? "jolie" : "pas jolie"} (poids : {potato.weight})
          </li>
        ))}
      </ul>
        </div>
        <div className="flex-3 p-1 bg-blue-100">
          <img 
            src={'/images/'+ myTowel.image} 
            alt={myTowel.color} 
            className="w-3xs h-auto object-cover"
          />
        </div>
      </div>

    </div>
  );
}