import styled from "styled-components";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

const faqs = [
  {
    title: "Ce sunt cookie-urile și cum funcționează?",
    text: "Cookie-urile sunt fișiere text de mici dimensiuni pe care site-urile le stochează pe dispozitivul tău atunci când le vizitezi. Acestea sunt utilizate în mod obișnuit pentru a reține informații despre vizită, precum preferințe, starea de autentificare sau tipare de utilizare, cu scopul de a îmbunătăți experiența de navigare. Atunci când vizitezi un site, cookie-urile sunt salvate în browserul tău și sunt trimise înapoi către site la vizitele ulterioare. Acest lucru permite site-ului să recunoască dispozitivul tău și să își amintească anumite informații, ajutând paginile să se încarce corect sau să funcționeze conform așteptărilor.",
  },
  {
    title: "De ce folosesc site-urile cookie-uri?",
    text: "Site-urile folosesc cookie-uri, în general, pentru a îmbunătăți funcționalitatea, a analiza traficul, a personaliza conținutul și a optimiza experiența generală a utilizatorilor. Unele cookie-uri sunt esențiale pentru funcțiile de bază, în timp ce altele îi ajută pe administratorii site-ului să înțeleagă modul în care vizitatorii interacționează cu acesta.",
  },
  {
    title: "Ce tipuri de cookie-uri sunt utilizate frecvent?",
    text: "Tipurile comune de cookie-uri includ cookie-uri esențiale (necesare pentru funcționalitățile de bază), cookie-uri de performanță sau analiză (folosite pentru a măsura utilizarea site-ului), cookie-uri de funcționalitate (folosite pentru a reține preferințele) și cookie-uri de marketing (utilizate pentru publicitate și urmărire).",
  },
  {
    title: "Webvertize utilizează cookie-uri?",
    text: "În prezent, Webvertize nu utilizează cookie-uri pe acest site. Poți naviga pe site fără niciun tip de urmărire sau stocare de date bazată pe cookie-uri.",
  },
  {
    title: "Webvertize va utiliza cookie-uri în viitor?",
    text: "În cazul în care cookie-urile vor fi introduse în viitor, această pagină va fi actualizată corespunzător. Ne angajăm să fim transparenți și vom explica în mod clar ce tipuri de cookie-uri sunt utilizate, de ce sunt implementate și cum influențează experiența ta de navigare.",
  },
  {
    title:
      "Cum voi fi informat despre modificările privind utilizarea cookie-urilor?",
    text: "Orice modificare legată de utilizarea cookie-urilor va fi comunicată prin actualizări ale acestei pagini de Politică privind cookie-urile. Acolo unde este necesar, ți se vor oferi și opțiuni clare privind consimțământul pentru utilizarea cookie-urilor.",
  },
];

const Accordion = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function AccordionFAQ() {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <Accordion className="container">
      <h3>Informații despre cookie-uri și întrebări frecvente</h3>
      <p className="fs-5">
        Mai jos găsești informații generale despre cookie-uri, scopul acestora
        și modul în care sunt utilizate în prezent.
      </p>
      {faqs.map((el, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={el.title}
          num={index + 1}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionFAQ;
