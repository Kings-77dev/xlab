// // components/ServiceCard.tsx
// import Link from "next/link";
// import { IconType } from "react-icons";

// interface ServiceCardProps {
//   icon: IconType;
//   title: string;
//   text: string;
// }

// export default function ServicesCard({ icon: Icon, title, text }: ServiceCardProps) {
//   return (
//     <div className="flex flex-col items-start space-y-4">
//       <div className="bg-pink-100 p-3 rounded-lg inline-block">
//         <Icon className="h-6 w-6 text-accent" />
//       </div>
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-gray-600 text-sm">{text}</p>
//       <Link
//         href="/pricing"
//         className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-dark transition"
//       >
//         View More
//       </Link>
//     </div>
//   );
// }



