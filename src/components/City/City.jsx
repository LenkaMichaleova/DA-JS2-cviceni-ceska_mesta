export const City = ({name, photo, population, area, district}) => (    
    <div key={name} className="city">
        <h2>{name}</h2>
        <img src={photo} alt={name} />
        <p>Počet obyvatel: {population}</p>
        <p>Rozloha: {area} km3</p>
        <p>Okres: {district}</p>
    </div>
)