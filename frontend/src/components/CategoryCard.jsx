// import React from 'react' 

const CategoryCard = ({ name, image, onClick }) => {
  return (
    <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-2xl border-2 border-[#ff4d2d] shrink-0 overflow-hidden bg-white shadow-xl shadow-gray-200 hover:shadow-lg transition-shadow relative cursor-pointer" onClick={onClick}>
      <img src={image} alt="" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"/>

      <div className="absolute bottom-0 left-0 w-full bg-[#ffffff96] bg-opacity-95 px-3 py-1 rounded-t-xl text-center shadow text-sm font-medium text-gray-800 backdrop-blur">
        {name}
      </div>
    </div>
  );
};

export default CategoryCard;

//   return (
//     <div
//       onClick={() => {
//         console.log("💥 DIRECT CARD CLICKED:", name);
//         if (onClick) onClick(); // Ye parent function ko call karega
//       }}
//       className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-2xl border-2 border-red-500 shrink-0 overflow-hidden relative cursor-pointer z-20"
//     >
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-full object-cover pointer-events-none"
//       />
//       <div className="absolute bottom-0 left-0 w-full bg-white/80 p-2 text-center pointer-events-none text-black font-bold">
//         {name}
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;



// const CategoryCard = ({ name, image, onClick }) => {
//   return (
//     <div
//       onClick={onClick} // Yahan seedha onClick pass karna hai
//       className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-2xl border-2 border-red-500 shrink-0 overflow-hidden relative cursor-pointer z-20 shadow-xl bg-white"
//     >
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-full object-cover pointer-events-none"
//       />
//       <div className="absolute bottom-0 left-0 w-full bg-white/80 p-2 text-center pointer-events-none text-black font-bold text-sm">
//         {name}
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;