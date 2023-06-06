import Image from "next/image";
import customers from "../assets/customers.png";
import Button from "./Button";

export default function Banner() {
  return (
    <div className="mb-16 bg-gray-100">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center justify-between px-8 py-4 lg:flex-row">
        <div className="mb-8 p-0 md:mb-0 md:p-10 lg:p-0">
          <p className=" mb-4 text-sm font-bold uppercase text-purple-600">
            Customers
          </p>
          <h1 className="mb-16 max-w-full font-alt text-2xl font-bold leading-tight md:text-4xl lg:max-w-[480px] lg:text-[3rem]">
            Talkdesk customers&apos; success stories.
          </h1>
          <Button />
        </div>

        <Image
          className="w-80 md:w-[500px]"
          src={customers}
          alt="Customers displayed in a mosaic"
        />
      </div>
    </div>
  );
}
