import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "나성민",
    birthday: "990201",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "전미도",
    birthday: "931222",
    gender: "여자",
    job: "배우",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "허영만",
    birthday: "640505",
    gender: "남자",
    job: "만화가",
  },
];

function App() {
  return (
    <div>
      {customers.map((customer) => {
        return (
          <Customer
            key={customer.id}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          />
        );
      })}
    </div>
  );
}

export default App;
