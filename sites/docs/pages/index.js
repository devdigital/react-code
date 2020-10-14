import Head from "next/head";
import { Code } from "@react-code/core";

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Code</title>
      </Head>
      <Code language="javascript" code="const foo = 'bar'" />
    </div>
  );
}
