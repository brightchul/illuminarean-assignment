import ReviewHistory from "@/components/ReviewHistory";
import ReviewNew from "@/components/ReviewNew";
import ReviewSearch from "@/components/ReviewSearch";
import { useSyncStore } from "@/hooks";
import Head from "next/head";

export default function Home() {
  useSyncStore();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Movie Review Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-md mx-auto my-0 border border-gray-200 border-solid">
        <ReviewNew />
        <ReviewSearch />
        <ReviewHistory />
      </main>
    </>
  );
}
