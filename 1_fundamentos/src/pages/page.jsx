//CSS
import '../App.css'

//First Component
import FirstComponent from "../components/Components";

//Template
import Template from "../components/Template";

//Mycomponent
import Mycomponent from "../components/Mycomponent";

//Events
import Events from "../components/Events";


export default function Page() {
    return(
        <div>
         Tudo Cru
         <FirstComponent />
         <Template />
         <Mycomponent />
         <Events />
        </div>
    )
}