import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href="/users/newuser"> New User</Link>
      <ProductCard />
    </main>
  )
}
