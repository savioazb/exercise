import Image from "next/image";

export default function Card({
  imgUrl,
  brokenImageUrl,
  brokenImageAlt,
  title,
  label,
}) {
  return (
    <div className="group cursor-pointer">
      <div className="mb-2 overflow-hidden rounded-xl">
        <Image
          src={imgUrl ? imgUrl : brokenImageUrl}
          className="inline-block h-auto w-full max-w-lg rounded-xl transition duration-500 ease-in-out hover:scale-110"
          width="0"
          height="0"
          sizes="100%"
          alt={imgUrl ? "" : brokenImageAlt}
        />
      </div>

      <div className="">
        <span className="text-xs font-medium uppercase text-purple-600 sm:text-sm">
          {label}
        </span>
        <h5 className="font-alt text-base font-bold transition ease-in group-hover:text-purple-600 sm:text-lg">
          {title}
        </h5>
      </div>
    </div>
  );
}
