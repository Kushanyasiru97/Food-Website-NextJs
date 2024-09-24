import Link from "next/link";
import LogoImg from "@/assets/logo.png"
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader(){
    return(
      <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={LogoImg} alt="Aplate with food on it" priority/>
        Next Level Foods
        </Link>

        <nav className={classes.nav}>
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
      </>
    )
}