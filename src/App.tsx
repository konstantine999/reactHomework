import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./components/style.css";

function App() {
  let items = ["Tbilisi", "Kutaisi", "Zugdidi", "Telavi"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  let informations = [
    "თბილისი (1936 წლის 17 აგვისტომდე ტფილისი[1][2]) — დედაქალაქი და მუნიციპალიტეტი[3] საქართველოში; 1922–1936 წლებში ერთდროულად იყო ამიერკავკასიის სფსრ დედაქალაქი; მდებარეობს აღმოსავლეთ საქართველოში, თბილისის ქვაბულში, მდინარე მტკვრის ორივე სანაპიროზე, ზღვის დონიდან 380–600 მ სიმაღლეზე, ჩრდილოეთით ესაზღვრება საგურამოს ქედის სამხრეთი მთისწინეთი, აღმოსავლეთით — ივრის ზეგნის ჩრდილო-დასავლეთი მონაკვეთი, დასავლეთით და სამხრეთით კი — თრიალეთის ქედის განშტოებები",
  ];

  console.log(items);
  const [alerVisible, setAletVisibility] = useState(false);
  return (
    <div className="wrapper">
      <ListGroup
        items={items}
        heading="Cities Of Georgia"
        onSelectItem={handleSelectItem}
      />
      {alerVisible && (
        <Alert
          alertInfo={informations}
          onClose={() => setAletVisibility(false)}
        ></Alert>
      )}
      <Button color="primary" onClick={() => setAletVisibility(true)}>
        Learn More
      </Button>
    </div>
  );
}

export default App;
