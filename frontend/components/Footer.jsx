import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent py-1 text-center text-sm font-extralight text-gray-700">
      <Link
        className="S_Underline relative z-10 px-1 pt-1 hover:after:w-full"
        href="https://github.com/shehza-d"
        target="_blank"
      >
        Ⓒ Developed by Sir Inzamam and Designed by Shehzad
      </Link>
    </footer>
  );
}
