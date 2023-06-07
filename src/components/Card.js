import Image from "next/image";

export default function Card({
  imgUrl,
  brokenImageUrl,
  brokenImageAlt,
  linkUrl,
  title,
  label,
}) {
  return (
    <div className="group cursor-pointer">
      <a target="_blank" href={`https://www.talkdesk.com${linkUrl}`}>
        <div className="mb-2 overflow-hidden rounded-xl">
          <Image
            src={imgUrl ? imgUrl : brokenImageUrl}
            className="inline-block h-auto w-full max-w-none rounded-xl transition duration-500 ease-in-out hover:scale-110 lg:max-w-lg"
            width="0"
            height="0"
            sizes="100%"
            alt={imgUrl ? label : brokenImageAlt}
          />
        </div>

        <div>
          <span className="text-xs font-medium uppercase text-purple-600 sm:text-sm">
            {label}
          </span>
          <h5 className="font-alt text-base font-bold transition ease-in group-hover:text-purple-600 sm:text-lg">
            {title}
          </h5>
        </div>
      </a>
    </div>
  );
}
