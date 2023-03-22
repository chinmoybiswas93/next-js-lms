import Courses from "@/components/pageComponents/home/Courses";
import Faq from "@/components/pageComponents/home/Faq";
import Hero from "@/components/pageComponents/home/Hero";
import LiveSeminar from "@/components/pageComponents/home/LiveSeminar";
import Mentors from "@/components/pageComponents/home/Mentor";
import Services from "@/components/pageComponents/home/Services";
import SuccessStories from "@/components/pageComponents/home/SuccessStories";
import Testimonials from "@/components/pageComponents/home/Testimonials";

export default function Home({ services, categories }) {
  return (
    <>
      <Hero></Hero>
      <Services services={services}></Services>
      <Courses categories={categories}></Courses>
      <LiveSeminar></LiveSeminar>
      <Testimonials></Testimonials>
      <SuccessStories></SuccessStories>
      <Mentors></Mentors>
      <Faq></Faq>
    </>
  );
}

export async function getServerSideProps() {
  const urls = [
    `${process.env.API_URL}/services`,
    `${process.env.API_URL}/categories`,
    `${process.env.API_URL}/courses`,
  ];

  const data = await Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url);
      const dataJson = await res.json();
      return dataJson;
    })
  );

  // console.log(data);
  return {
    props: {
      services: data[0],
      categories: data[1],
      courses: data[2],
    },
  };
}
