type ShowPeopleType = {
  people: arrPeople[]; //Array<arrPeople>
};

type arrPeople = {
  naming: string
  age: number
  country:String
};

export const ShowPeople = (props: ShowPeopleType) => {
  const topCars = [
    { manufacturer: "BMW", model: "m5cs" },
    { manufacturer: "Mercedes", model: "e63s" },
    { manufacturer: "Audi", model: "rs6" },
  ];

  return (
    <div>
      <ul>
        {props.people.map((human: arrPeople, index: number) => {
          debugger;
          return (
            <li>
              naming: {human.naming} _age: {human.age} _country: {human.country}
            </li>
          );
        })}
      </ul>
      
      {topCars.map((car,index)=> {
        return (
        <table>
        <tr key={index}>
          <td>{car.manufacturer}</td>
          <td>{car.model}</td>
        </tr>
      </table>
        )
      })}
    </div>
  );
};
