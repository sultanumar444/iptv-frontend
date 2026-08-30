import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";

export const metadata: Metadata = {
  title: "DMCA",
  description: "DMCA-policy för SverigeIPTV.",
};

export default function DmcaPage() {
  return (
    <>
      <PageTitleBar title="DMCA" />

      <div className="mx-auto max-w-7xl px-6 py-16 text-white/80">
        <p>
          Välkommen till SverigeIPTV. Vi respekterar andras immateriella
          rättigheter precis som vi förväntar oss att andra ska respektera
          våra rättigheter. I enlighet med Digital Millennium Copyright Act,
          Title 17, United States Code, Section 512(c), kan en
          upphovsrättsägare eller dennes agent skicka ett meddelande om
          borttagning till oss via vår DMCA-agent som anges nedan. Som
          internetleverantör har vi rätt att göra anspråk på immunitet från
          nämnda intrångsanspråk i enlighet med &quot;safe harbor&quot;-bestämmelserna
          i DMCA. För att lämna in ett anspråk på intrång i god tro till oss
          måste du skicka ett meddelande till oss som anger följande
          information:
        </p>

        <h2 className="mt-10 text-2xl font-bold text-white">
          Meddelande om intrång – krav
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5">
          <li>
            En fysisk eller elektronisk signatur från upphovsrättsinnehavaren
            (eller någon som är behörig att agera på uppdrag av ägaren);
          </li>
          <li>
            Identifiering av det upphovsrättsskyddade verk som påstås ha
            gjorts intrång;
          </li>
          <li>
            Identifiering av det intrångsmaterial som ska tas bort och
            information som rimligen är tillräcklig för att
            tjänsteleverantören ska kunna hitta materialet. (Skicka in
            webbadressen till sidan i fråga för att hjälpa oss att
            identifiera det påstådda kränkande arbetet);
          </li>
          <li>
            Information som rimligen är tillräcklig för att tillåta
            tjänsteleverantören att kontakta den klagande parten inklusive
            ditt namn, fysiska adress, e-postadress, telefonnummer och
            faxnummer;
          </li>
          <li>
            Ett uttalande om att den klagande parten i god tro tror att
            användningen av materialet är otillåten av upphovsrättsagenten;
            och
          </li>
          <li>
            Ett uttalande om att informationen i meddelandet är korrekt och
            att den klagande parten har rätt att agera på
            upphovsrättsinnehavarens vägnar.
          </li>
        </ol>

        <p className="mt-6">
          Avdelning 17 USC §512(f) ger civila skadeståndspåföljder, inklusive
          kostnader och advokatarvoden, mot varje person som medvetet och
          materiellt felaktigt framställer viss information i en anmälan om
          intrång enligt 17 USC §512(c)(3).
        </p>

        <p className="mt-6">
          Skicka alla meddelanden om borttagning via vår kontaktsida.
          Vänligen skicka via e-post för omedelbar uppmärksamhet.
        </p>

        <p className="mt-6">
          Observera att vi kan dela identiteten och informationen i alla
          anspråk på upphovsrättsintrång som vi tar emot med den påstådda
          intrångsmannen. När du skickar in ett anspråk förstår du att
          acceptera och godkänna att din identitet och anspråk kan
          kommuniceras till den påstådda intrångsmannen.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-white">
          Bestridande av anmälan – Återställande av material
        </h2>
        <p className="mt-4">
          Om du har fått ett meddelande om att material tas bort på grund av
          ett anspråk på upphovsrättsintrång, kan du ge oss ett bestridande
          av anmälan i ett försök att få materialet i fråga att återställa
          till webbplatsen. Nämnda meddelande måste lämnas skriftligen till
          vårt DMCA-ombud och måste innehålla väsentligen följande delar i
          enlighet med 17 USC Section 512(g)(3):
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5">
          <li>Din fysiska eller elektroniska signatur.</li>
          <li>
            En beskrivning av materialet som har tagits ner och den
            ursprungliga platsen för materialet innan det togs ner.
          </li>
          <li>
            Ett uttalande under straff för mened att du i god tro tror att
            materialet togs bort eller inaktiverades som ett resultat av
            misstag eller felaktig identifiering av materialet som ska tas
            bort eller inaktiveras.
          </li>
          <li>
            Ditt namn, adress och telefonnummer och ett uttalande om att du
            samtycker till jurisdiktionen för den federala
            distriktsdomstolen för det rättsdistrikt där adressen är belägen
            (eller om du är utanför USA, att du samtycker till jurisdiktion
            för alla rättsliga distrikt där tjänsteleverantören kan
            befinna sig), och att du accepterar delgivning från den person
            eller det företag som lämnade den ursprungliga anmälan om
            intrång.
          </li>
          <li>Skicka ditt bestridande via vår kontaktsida. E-post rekommenderas.</li>
        </ol>

        <h2 className="mt-10 text-2xl font-bold text-white">
          Policy för upprepad intrång
        </h2>
        <p className="mt-4">
          Vi tar upphovsrättsintrång på största allvar. I enlighet med
          policykraven för upprepade intrång i Digital Millennium Copyright
          Act, upprätthåller vi en lista över DMCA-meddelanden från
          upphovsrättsinnehavare och gör ett gott försök att identifiera
          eventuella upprepade intrång. De som bryter mot vår interna policy
          för upprepade intrång kommer att få sina konton avslutade.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-white">Ändringar</h2>
        <p className="mt-4">
          Vi förbehåller oss rätten att ändra innehållet på denna sida och
          dess policy för hantering av DMCA-anspråk när som helst, oavsett
          anledning. Du uppmanas att komma tillbaka för att granska denna
          policy ofta för eventuella ändringar.
        </p>
      </div>
    </>
  );
}
