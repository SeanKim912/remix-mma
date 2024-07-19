import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "MMA Underground - Crystal Lake, IL | Mixed Martial Arts Training and Fitness Gym" },
    { name: "description",
      content: "Welcome to Remix!" },
    {
      name: "keywords",
      content:
        "Mixed martial arts, MMA, Brazillian Jiu Jutsu, BJJ, boxing, kickboxing, muay thai, wrestling, grappling, striking, cardio, kettlebells, weightlifting, gym, fighting, combat sports"
    }
  ];
};

export default function Index() {
  return (
    <main>
      <Hero />
    </main>
  );
}
