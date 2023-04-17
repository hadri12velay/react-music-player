import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name:"Sar FRRRH",
            cover: "./images/cover1.png",
            artist: "Red Song Man",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=47641",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name:"Blue People",
            cover: "./images/cover2.png",
            artist: "Reil",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=47639",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name:"Dream Dramps",
            cover: "./images/cover3.png",
            artist: "Syeak Renteramc",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=47646",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
    ]
}

export default chillHop;