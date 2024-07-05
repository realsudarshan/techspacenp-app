// import React, { useEffect } from "react";
// import {Player}     from "video-react"

// export const FullVideoScreen: React.FC = () => {
//   useEffect(() => {
//     const video = document.getElementById("video") as HTMLVideoElement;
//     if (video) {
//       console.log(
//         video
//           .play()
//           .then((res) => console.log(res))
//           .catch((err) => console.log(err))
//       );
//       video.play().catch((err) => console.log(err));
//     }
//   }, []);

//   return (
//     <div className="w-full bg-slate-400 h-full fixed top-0 left-0 bottom-0 right-0">
//       <Player
//               autoPlay={true}
//               muted={true}
//       >
//         <source src="../../../photos/assets/bg0004_2.mov" />
//       </Player>
//     </div>
//   );
// };
