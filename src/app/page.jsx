import Image from "next/image";
import styles from "./styles/page.module.scss";

//Components
import Header from "@/components/Header";
import AllTasks from "@/components/AllTasks";

export default function Home() {
  return (
    <>
      <Header />
      <AllTasks />
    </>
  );
}
