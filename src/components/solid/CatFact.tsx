import { createResource, For } from "solid-js";

export default function CatFact() {
  const [catFacts] = createResource(async () => {
    return fetch("https://catfact.ninja/facts").then((res) => res.json());
  });

  return (
    <>
      <ul>
        <For each={catFacts()?.data}>{(item: any) => <li>{item.fact}</li>}</For>
      </ul>
    </>
  );
}
