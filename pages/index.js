import Link from "next/link";
import { introduction } from "../resources/lib/data.js";

export default function Homepage() {
  return (
    <>
      <h1>Lord of the Rings: All Volumes</h1>
      <p>{introduction}</p>
      <ul>
        <li>
          <Link href="/volumes">All Volumes</Link>
        </li>
      </ul>
    </>
  );
}
