


// // components/WhoWeWorkCard.tsx
// import Image from "next/image";

// interface WhoWeWorkCardProps {
//   /** Card index, e.g. 2 will render “02” in the top‐left */
//   idx: number;
//   /** Main heading (e.g. “Design”) */
//   title: string;
//   /** A single block of descriptive text */
//   desc: string;
// }

// export default function WhoWeWorkCard({ idx, title, desc }: WhoWeWorkCardProps) {
//   return (
//     <div className="relative bg-[#362E1C] rounded-2xl overflow-hidden text-white h-96  shadow-lg">
//       {/** 1) Semi-transparent “02” in top‐left */}
//       <div className="absolute top-4 left-4 text-2xl font-bold text-opacity-30">
//         {String(idx).padStart(2, "0")}
//       </div>

//       {/** 2) Decorative “clover” outline in top‐right */}
//       <div className="absolute top-0 right-0 w-40 h-40 -translate-y-10 translate-x-10">
//         {/* 
//           This SVG draws four quarter‐circles to form the “petal” shape you saw
//           in your reference screenshot. We use a gold stroke and no fill.
//         */}
//         <svg
//           viewBox="0 0 200 200"
//           className="w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="
//               M200,100 
//               A100,100 0 0,0 100,0 
//               L200,0 
//               Z

//               M100,0 
//               A100,100 0 0,0 0,100 
//               L0,0 
//               Z

//               M0,100 
//               A100,100 0 0,0 100,200 
//               L0,200 
//               Z

//               M100,200 
//               A100,100 0 0,0 200,100 
//               L200,200 
//               Z
//             "
//             stroke="#EBC02D"
//             strokeWidth="2"
//             fill="none"
//           />
//         </svg>
//       </div>

//       {/** 3) Title + description, bottom‐left aligned */}
//       <div className="px-8 pb-8 pt-20 max-w-2xl">
//         <h3 className="text-4xl font-semibold text-[#EBC02D] mb-4">{title}</h3>
//         <p className="text-gray-200 leading-relaxed">{desc}</p>
//       </div>
//     </div>
//   );
// }



// // components/WhoWeWorkCard.tsx
// import Image from "next/image";

// interface WhoWeWorkCardProps {
//   /** 1-based index; will render as “01”, “02”, etc. */
//   idx: number;
//   /** Heading for this step/card (“Small to Mid-Sized Businesses”, etc.) */
//   title: string;
//   /** A single block of descriptive text */
//   desc: string;
//   /** Path (relative to /public) of the inset illustration on the right */
//   img: string;
// }

// export default function WhoWeWorkCard({ idx, title, desc, img }: WhoWeWorkCardProps) {
//   return (
//     <div className="relative bg-[#111] rounded-2xl overflow-hidden text-white drop-shadow-lg">
//       {/** 1) Large semi‐transparent index in top‐left **/}
//       <div className="absolute top-6 left-6 text-3xl font-bold text-white text-opacity-20">
//         {String(idx).padStart(2, "0")}
//       </div>

//       {/** 2) The right‐hand illustration “glow” container **/}
//       <div className="absolute top-0 right-0 w-64 h-full pointer-events-none">
//         {/** 
//          We place a gradient glow behind the image so it looks like a soft halo. 
//          Adjust bg-[rgba(…)]] as desired.
//         **/}
//         <div
//           className="absolute top-0 right-0 w-full h-full"
//           style={{
//             background:
//               "radial-gradient(circle at 20% 30%, rgba(255, 100, 20, 0.3) 0%, transparent 60%)",
//           }}
//         />
//         <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center">
//           <div className="relative w-40 h-64">
//             <Image
//               src={img}
//               alt={title}
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/** 3) Left‐aligned title + description, padded so content won’t overlap the illustration **/}
//       <div className="relative px-8 py-12 md:pr-48 lg:pr-64">
//         <h3 className="text-4xl font-semibold mb-4">{title}</h3>
//         <p className="text-gray-300 leading-relaxed">{desc}</p>
//       </div>
//     </div>
//   );
// }


// components/WhoWeWorkCard.tsx
import Image from "next/image";

interface WhoWeWorkCardProps {
  /** Numeric index (e.g. 1, 2, 3) — rendered as “01”, “02”, etc. */
  idx: number;
  /** Card heading text */
  title: string;
  /** Card descriptive text */
  desc: string;
  /** Optional right‐side graphic (if you want to pass a custom image) */
  graphicSrc?: string;
}

export default function WhoWeWorkCard({
  idx,
  title,
  desc,
  graphicSrc,
}: WhoWeWorkCardProps) {
  return (
    <div className="relative flex h-80 w-full max-w-2xl overflow-hidden rounded-2xl bg-[#121212] border border-gray-800">
      {/** 1) Semi-transparent index in top-left **/}
      <div className="absolute top-4 left-4 text-2xl font-bold text-white text-opacity-20">
        {String(idx).padStart(2, "0")}
      </div>

      {/** 2) Title & description (left half) **/}
      <div className="flex flex-col justify-between px-8 py-6">
        <div>
          <h3 className="text-3xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-200 leading-relaxed">
            {desc}
          </p>
        </div>
        {/** You can add a “time badge” or any extra footer here if needed **/}
      </div>

      {/** 3) Right-side “glow” graphic (absolutely positioned) **/}
      <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center pr-8">
        {graphicSrc ? (
          // If a custom graphic URL is passed, render it here:
          <div className="relative h-40 w-40">
            <Image
              src={graphicSrc}
              alt={`${title} graphic`}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          // Otherwise, render a placeholder glowing squares as an example:
          <div className="relative h-40 w-40">
            <svg
              viewBox="0 0 100 100"
              className="absolute top-0 left-0 h-full w-full animate-pulseOpacity"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* A translucent rounded rectangle “back” */}
              <rect
                x="10"
                y="10"
                width="60"
                height="60"
                rx="8"
                fill="#FF6A3D"
                fillOpacity="0.6"
              />
              {/* A frosted‐glass rectangle “front” */}
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                rx="8"
                fill="white"
                fillOpacity="0.15"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}