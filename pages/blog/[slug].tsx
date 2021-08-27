import { useRouter } from "next/router"


export default function BlogPage() {
  const route = useRouter()
  console.log(route.query, '<<<route')
  return (
    <div>
      <h1>Hallo World</h1>
    </div>
  )
}
