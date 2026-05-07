import { redirect } from "next/navigation";
const defalutCategoryId='01';

export default async function Home() {
 
  return (
    redirect(`/category/${defalutCategoryId}`)
  );
}
