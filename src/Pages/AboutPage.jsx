import React from "react";
import FeatureItem from "../components/FeatureItem";
import Author from "../assets/Kemal-Kujovic.jpg";
import SocialCard from "../components/SocialCard";
const AboutPage = () => {
  return (
    <div className="min-h-screen my-10">
      <FeatureItem
        descrpiton="Welcome! My name is Kemal Kujović, and I hail from city of Novi Pazar in Serbia. With a passion for technology and programming, I've been exploring the world of information technology for three years now, focusing on studies at Alfa University.
        My interest in programming, particularly frontend development, has grown out of a desire to create inspiring and useful digital content. I'm fascinated by the possibilities that technology offers in crafting interactive and aesthetically appealing user experiences on the web.
        Aside from my love for coding, I also enjoy traveling and exploring different cultures and landscapes. To me, traveling represents not only adventure and discovering new places but also an opportunity for personal growth and expanding horizons.
        This website is the fruit of my passion for technology and travel. I hope that my articles, tutorials, and stories will inspire you to explore the world of programming and discover new destinations around the globe.
        Thank you for being here and sharing in this journey with me!"
        image={Author}
      />
      <SocialCard />
    </div>
  );
};

export default AboutPage;
