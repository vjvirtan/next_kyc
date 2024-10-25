import { KeyValue } from "../contexts/Advice";
const newTranslation = (
  key: string,
  fi: string,
  se: string,
  en: string
): KeyValue<string, KeyValue<string, string>[]> => {
  return {
    key: key,
    value: [kvPair("fi", fi), kvPair("se", se), kvPair("en", en)],
  };
};
const kvPair = (lang: string, input: string): KeyValue<string, string> => {
  return {
    key: lang,
    value: input,
  };
};

//TODO: MOVE THESE TO GROUP VALIDATION SERVER
const InitialTranslations = (): KeyValue<
  string,
  KeyValue<string, string>[]
>[] => {
  let r: KeyValue<string, KeyValue<string, string>[]>[] = [];
  r.push(
    newTranslation(
      "findCompany",
      "Hae y-tunnuksella",
      "Sök med FO-nummer",
      "Search by business ID"
    )
  );
  r.push(
    newTranslation(
      "exampleCompanyIDs",
      "Voit hakea yhtiötä vain seuraavilla esimerkki Y-tunnuksilla:",
      "Företagssökningar är begränsade till följande FO-nummer",
      "You can only search for companies using the following example business IDs"
    )
  );
  r.push(
    newTranslation(
      "beneficiary",
      "Edunsaaja",
      "Faktisk förmånstagare",
      "Beneficial owner"
    )
  );
  r.push(
    newTranslation(
      "tradeRegister",
      "Kaupparekisteri",
      "Handelsregister",
      "Trade register"
    )
  );
  r.push(
    newTranslation(
      "findNewCompany",
      "Hae yhtiötä",
      "Sök färetag",
      "Find company"
    )
  );
  r.push(
    newTranslation(
      "addPerson",
      "Lisää henkilö",
      "Lägg till person",
      "Add person"
    )
  );

  r.push(
    newTranslation(
      "findWithId",
      "Hae henkilötunnuksella",
      "Sök med personnummer",
      "Search with id"
    )
  );
  r.push(
    newTranslation(
      "headerText",
      "Yrityksen tuntemistiedot",
      "Företagsidentifieringsinformation",
      "Company Identification Information"
    )
  );
  r.push(newTranslation("address", "Osoite", "Adress", "Address"));

  r.push(
    newTranslation(
      "demoInfo",
      "Voit ainoastaan käyttää listan demohenkilöitä:",
      "Du kan endast använda listans demopersoner:",
      "You can only use the demo persons in the list:"
    )
  );

  r.push(newTranslation("done", "Valmis", "Färdig", "Done"));

  r.push(newTranslation("share", "Omistus", "Aktieägande", "Share"));
  return r;
};

export default InitialTranslations;
