import Link from "next/link";
import classes from "./page.module.css";

export default function MealsPage(){
    return (
        <>
        <header className={classes.header}>
            <h1>
                Delicious meals, Created <span>by you</span>
            </h1>
            <p>Choose your Favourite Recipe and cook it yourselt. It is easy and fun</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                Share Your Favorite Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            
        </main>
        </>
    )
}