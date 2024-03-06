import "./App.css";
import Card from "./components/Card";
import dog1 from "./assets/dog1.jpeg";
import dog2 from "./assets/dog2.jpeg";
import dog3 from "./assets/dog3.jpeg";
import dog4 from "./assets/dog4.jpeg";
import dog5 from "./assets/dog5.jpeg";
import dog6 from "./assets/dog6.jpeg";

function App() {
  return (
    <>
      <h1>Cute dogs</h1>
      <div className="principal-container">
        <Card
          image={dog1}
          name="Sunny"
          breed="Golden Retriever"
          description="Golden Retrievers are known for their friendly, gentle, and outgoing personalities. They are intelligent, loyal, and eager to please, making them excellent family pets and great with children."
        />
        <Card
          image={dog2}
          name="Peanut"
          breed="Pembroke Welsh Corgi"
          description="Golden Retrievers are known for their friendly, gentle, and outgoing personalities. They are intelligent, loyal, and eager to please, making them excellent family pets and great with children."
        />
        <Card
          image={dog3}
          name="Louie"
          breed="French Bulldog"
          description="Golden Retrievers are known for their friendly, gentle, and outgoing personalities. They are intelligent, loyal, and eager to please, making them excellent family pets and great with children."
        />
        <Card
          image={dog4}
          name="Luna"
          breed="Australian Shepherd"
          description="Golden Retrievers are known for their friendly, gentle, and outgoing personalities. They are intelligent, loyal, and eager to please, making them excellent family pets and great with children."
        />
        <Card
          image={dog5}
          name="Mochi"
          breed="Shiba Inu"
          description="Golden Retrievers are known for their friendly, gentle, and outgoing personalities. They are intelligent, loyal, and eager to please, making them excellent family pets and great with children."
        />
        <Card
          image={dog6}
          name="Max"
          breed="Labrador Retriever"
          description="Golden Retrievers are known for their friendly, gentle, and outgoing personalities. They are intelligent, loyal, and eager to please, making them excellent family pets and great with children."
        />
      </div>
    </>
  );
}

export default App;
