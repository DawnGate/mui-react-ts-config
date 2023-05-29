import useSWR, { Fetcher } from 'swr';

type ReturnObj = {
  [key: string]: string;
};

function HomePage() {
  const fetcher: Fetcher<ReturnObj, string> = (url) =>
    fetch(url).then((res) => res.json());
  const { data, isLoading } = useSWR('/user', fetcher);

  if (isLoading) {
    return <p>IsLoading</p>;
  }

  // render
  return <p>Home Page {data?.errorMessage}</p>;
}

export default HomePage;
