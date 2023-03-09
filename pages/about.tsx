import { NextPage } from "next"
import Header from "@/components/Header"

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <div>
      <Header />
      <div>About page</div>
    </div>
  )
}

export default About
