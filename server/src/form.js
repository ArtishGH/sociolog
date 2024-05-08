const answers = [
  "Czasami warto zwolnić tempo i pozwolić sobie na odrobinę przyjemności, dlatego tez z wielką przyjemnością rekomenduję chwilę relaksu przy kieliszku wyśmienitego trunku.",
  "W natłoku codziennych obowiązków łatwo zapomnieć o chwili dla siebie. Pęd i gonitwa mogą przytłaczać, a chwile relaksu stawać się coraz rzadsze. Dlatego też pragnę zwrócić uwagę na zbawienną moc zatrzymania się na moment i celebrowania życia. A co może być lepszym sposobem na to niż delektowanie się wyśmienitym trunkiem w gronie bliskich lub w samotności?",
  "W wirze codzienności, gdzie czas niczym rwąca rzeka pędzi nieubłaganie, łatwo zapomnieć o zatrzymaniu się i czerpaniu przyjemności z prostych chwil. Pragnę więc zwrócić uwagę na zbawienną moc celebrowania życia, celebrowania tych ulotnych momentów, które niczym klejnoty zdobią naszą egzystencję. A co może być lepszym sposobem na to niż delektowanie się wyśmienitym trunkiem w gronie bliskich lub w samotności?",
  "W wirze codziennych obowiązków, gdzie czas niczym rwąca rzeka pędzi nieubłaganie, łatwo zatracić się w pośpiechu i zapomnieć o zatrzymaniu się, by docenić piękno otaczającego nas świata. Pragnę więc zwrócić uwagę na zbawienną moc celebrowania życia, celebrowania tych ulotnych chwil, które niczym drogocenne perły zdobią naszą egzystencję.",
];

export const getAnswer = () => {
  const index = Math.floor(Math.random() * answers.length);
  return answers[index];
};
