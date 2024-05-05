import React from "react";
import FeatureItem from "../components/FeatureItem";
import Author from "../assets/Kemal-Kujovic.jpg";
import SocialCard from "../components/SocialCard";
const AboutPage = () => {
  return (
    <div className="min-h-screen my-10">
      <FeatureItem
        descrpiton="Dobrodošli! Moje ime je Kemal Kujović, i potičem iz grada Novog Pazara u Srbiji. Sa strašću prema tehnologiji i programiranju, već tri godine istražujem svet informacionih tehnologija, fokusirajući se na studije na Alfa Univerzitetu. Moj interes za programiranje, posebno frontend razvoj, proizašao je iz želje da kreiram inspirativne i korisne digitalne sadržaje. Fasciniran sam mogućnostima koje tehnologija nudi u oblikovanju interaktivnih i estetski privlačnih korisničkih iskustava na internetu. Pored ljubavi prema kodiranju, takođe uživam u putovanjima i istraživanju različitih kultura i pejzaža. Putovanje za mene predstavlja ne samo avanturu i otkrivanje novih mesta, već i priliku za lični razvoj i proširivanje horizonta. Ovaj veb sajt je plod moje strasti prema tehnologiji i putovanjima. Nadam se da će moji članci, tutorijali i priče vas inspirisati da istražite svet programiranja i otkrijete nove destinacije širom sveta. Hvala vam što ste ovde i delite ovu avanturu sa mnom!"
        image={Author}
      />
      <SocialCard />
    </div>
  );
};

export default AboutPage;
