import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

import styles from "./page.module.css";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) notFound();

  return {
    title: meal.title,
    description: meal.summary,
  };
}

const MealDetailsPage = async ({ params }) => {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug);

  if (!meal) notFound();
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image
            src={`https://rohit-nextjs-demo-users-image.s3.amazonaws.com/${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};
export default MealDetailsPage;
