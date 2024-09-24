import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/assets/logo.png"

export default function MainHeader(){
    return(
      <header>
        <Link href="/">
        <img src={LogoImg.src} alt="Aplate with food on it" />
        Next Level Foods
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Food Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}