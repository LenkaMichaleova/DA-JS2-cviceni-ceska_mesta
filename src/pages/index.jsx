import { render } from '@czechitas/render';
import { City } from '../components/City/City';
import { cities } from './cz-cities';
import '../global.css';
import './index.css';
import '../components/City/City.css'

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {cities.map(({name, photo, population, area, district}) => (
      <City name={name} photo={photo} population={population} area={area} district={district}/>
    ))}
  </div>
);

// cities.map(({name, population, area}) => {
//   const {name, population, area} = city
//   return (
//     <City name={name} population={population} area={area}/>
//   )
// })