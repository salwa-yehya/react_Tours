// import React, { useState } from "react";

// const Wishlist = ({ wishlist, tours }) => {
//   const [showWishlist, setShowWishlist] = useState(false);

//   const getWishlistTours = () => {
//     return tours.filter((tour) => wishlist.includes(tour.id));
//   };

//   const wishlistTours = getWishlistTours();

//   return (
//     <div className="main">
//       <button onClick={() => setShowWishlist(!showWishlist)}>
//         {showWishlist ? "Hide Wishlist" : "Show Wishlist"}
//       </button>

//       {showWishlist && (
//         <div className="wishlist-items">
//           <h2>Wishlist</h2>
//           {wishlistTours.map((tour) => (
//             <div key={tour.id} className="wishlist-item">
//               <img src={tour.image} alt={tour.name} />
//               <p>{tour.name}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Wishlist;
