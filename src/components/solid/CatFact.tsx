import { createResource, For } from "solid-js";

export default function CatFact() {
  const [catFacts] = createResource(async () => {
    return fetch("https://catfact.ninja/facts").then((res) => res.json());
  });

  return (
    <>
      {/* <For each={catFacts()}>{(item: any) => <li>{item.fact}</li>}</For> */}
      {/* <h1>{catFacts().current_page}</h1> */}
      <h1>{JSON.stringify(catFacts())}</h1>
    </>
  );
}
