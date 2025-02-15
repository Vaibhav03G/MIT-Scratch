// import { SpriteImage } from "./Sprite";
// import React from "react";
// const SpriteCard = ({ spriteName, onClick, selected }) => {
//     return (
//         <div
//             className={`border-2 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-all
//       ${selected ? "border-purple-500" : "border-gray-300"}`}
//             onClick={onClick}
//         >
//             <SpriteImage spriteName={spriteName} styles={{ width: "60px", height: "60px" }} />
//             <p className="text-sm font-semibold mt-2">{spriteName}</p>
//         </div>
//     );
// };

// export default SpriteCard;




import { useDispatch } from "react-redux";
import { SpriteImage } from "./Sprite";
import React from "react";

const SpriteCard = ({ spriteName, onClick, selected, onDelete, name, photoId, id }) => {


    return (
        <div
            className={`border-2 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-all
            ${selected ? "border-purple-500" : "border-gray-300"}`}
            onClick={onClick}
        >
            <SpriteImage spriteId={photoId}  styles={{ width: "60px", height: "60px" }} />
            <p className="text-sm font-semibold mt-2">{spriteName}</p>
            {name === "spritcontrol" && (
                <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the onClick for the card
                    onDelete(spriteName); // Call the delete function with the sprite name or id
                }}
                className="mt-2 bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600 transition"
            >
                Delete
            </button>
            )}
        </div>
    );
};

export default SpriteCard;
