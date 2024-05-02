import Image from "next/image";
import Counter from "./components/Counter";
import Users from "./components/Users";
import Number from "./components/Number";

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
    <Counter/>
    <Number/>
    <br/>
    <Users/>
    </>
  );
}
