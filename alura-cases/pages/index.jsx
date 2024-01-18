import Link from "../src/components/Link/NextLink"
export default function Homepage(){
  return (
     <div>
      <h1>Alura Cases</h1>
      <Link href={"/faq"}>
        Ir para pagina FAQ
      </Link>
     </div>
   
  )
}