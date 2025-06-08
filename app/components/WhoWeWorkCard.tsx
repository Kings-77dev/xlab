


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
import { ClockIcon } from "@heroicons/react/24/outline";

interface WhoWeWorkCardProps {
  idx: number;
  title: string;
  desc: string;
  graphicSrc?: string;
  duration?: string; // e.g. "2–4 Days"
  img: string; // Added img property

}

export default function WhoWeWorkCard({
  title,
  desc,
  graphicSrc,
  duration,
  
}: WhoWeWorkCardProps) {
  return (
    // 1) Outer wrapper: relative, overflow-visible
    <div className="relative w-full h-80">
      {/* 2) Glow: negative inset so it bleeds out, blurred */}
      <div
        className="absolute -inset-4 rounded-2xl blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(235,192,45,0.5), transparent 70%)",
        }}
      />

      {/* 3) Actual card: z-10, can still overflow-hidden internally */}
      <div className="relative flex w-full h-full rounded-2xl bg-[#111] border border-gray-700 overflow-hidden z-10">
        {/* Left column */}
        <div className="flex-1 max-w-md px-10 py-8">
          <h3 className="text-3xl font-semibold text-white mb-4">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">{desc}</p>
          {duration && (
            <span className="inline-flex items-center space-x-2 bg-gray-800/50 border border-gray-600 rounded-full px-4 py-2 text-sm text-gray-200">
              <ClockIcon className="h-5 w-5" />
              <span>{duration}</span>
            </span>
          )}
        </div>

        {/* Right graphic */}
        <div className="absolute right-0 top-1/2 z-20 flex h-40 w-40 -translate-y-1/2 items-center justify-center pr-8">
          {graphicSrc ? (
            <div className="relative h-full w-full">
              <Image
                src={graphicSrc}
                alt={`${title} graphic`}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full animate-pulseOpacity"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="10"
                width="60"
                height="60"
                rx="8"
                fill="#ED2A4F"
                fillOpacity="0.6"
              />
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
          )}
        </div>
      </div>
    </div>
  );
}