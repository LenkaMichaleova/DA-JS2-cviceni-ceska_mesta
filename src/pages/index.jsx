import { render } from '@czechitas/render';
import { City } from '../components/City/City';
import { cities } from './data';
import '../global.css';
import './index.css';
import '../components/City/City.css'

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {cities.map(({name, population, area}) => (
      <City name={name} population={population} area={area}/>
    ))}
  </div>
);

// cities.map(({name, population, area}) => {
//   const {name, population, area} = city
//   return (
//     <City name={name} population={population} area={area}/>
//   )
// })