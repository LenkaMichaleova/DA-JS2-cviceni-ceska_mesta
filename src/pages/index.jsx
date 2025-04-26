import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const cities = [
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
  'Ústí nad Labem',
  'Pardubice',
];

// const cityElements = cities.map((city) => <div className="city">{city}</div>)

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {cities.map((city) => <div key={city} className="city">{city}</div>)}
  </div>
);