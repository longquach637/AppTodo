export async function fetchMoviesApi() {
  let response = await fetch("http://example.com/path/to/api");
  let result = await response.json();
  return result;
}
