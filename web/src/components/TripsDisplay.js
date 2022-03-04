// CSS
import './style/TripsDisplay.css';
import Trip from './Trip';

function TripsDisplay(props){
    const {trips} = props;
    return (

        <main>
            
            {trips.map((element)=>{
                return <Trip {...element} key = {element.eid}/>
            })}

        </main>

    );
}

export default TripsDisplay;