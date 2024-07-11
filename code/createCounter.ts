const map = new Map<string, string>();
function test(key: string) {
  if (!map[key]) return null;
  const v = map[key] as string;
  return v;
}

interface User {
  id: string;
  name: string;
}
