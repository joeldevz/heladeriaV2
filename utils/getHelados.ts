export async function getIces(): Promise<{ "copas": [] }> {
  const data = await Deno.readTextFile("./content/index.json");
  return JSON.parse(data);
}
