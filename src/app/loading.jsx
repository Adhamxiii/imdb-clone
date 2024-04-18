import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Image src="spinner.svg" alt="Loading..." width={600} height={600} />
    </div>
  );
}
