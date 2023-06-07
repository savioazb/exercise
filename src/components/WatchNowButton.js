export default function WatchNowButton() {
  return (
    <button className="group relative overflow-hidden rounded-lg bg-purple-600 px-10 py-3">
      <span className="absolute -right-[6%] -top-[140%] w-[110%] scale-0 rounded-full bg-purple-500 pb-[110%] transition duration-300 ease-out group-hover:scale-100"></span>
      <span className="relative text-sm font-semibold uppercase text-gray-50 ">
        Watch Now
      </span>
    </button>
  );
}
