import { useRouter } from "next/router";

export default function ContactPostPage() {
  const router = useRouter()
  console.log(router.pathname, '<<pathname');
  console.log(router.query, '<<quryt');

  return (
    <div>
      <h1>The Blog Post</h1>
    </div>
  )


}