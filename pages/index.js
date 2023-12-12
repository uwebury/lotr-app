import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <h1>Lord of the Rings: All Volumes</h1>
      <ul>
        <li>
          <Link href="/volumes">All Volumes</Link>
        </li>
      </ul>
    </>
  );
}
