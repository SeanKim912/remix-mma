import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/navigation";
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
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to MMA Underground</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
