"use client"
import Link from "next/link";
import LogoImg from "@/assets/logo.png"
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import  {usePathname} from "next/navigation";
import NavLink from "./nav-link";

export default function MainHeader(){

  const path = usePathname();

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
              <NavLink>Brows Meals</NavLink>
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