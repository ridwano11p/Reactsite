import Rightbody from "./Rightbody";
import Footer from "./Footer";
import "./body.css"
const Body = () => {
    return (
        <div className="leftcontainer">
            <h1>
                 Mission.
            </h1>
            <p>
               Our mission is to kill as many people as posible <br></br>
               before the king finds us and decides to thorw us <br></br> 
               in jail for murder and treason. 
            </p>
            <div className="border">
                
         </div>
         <div className="player">
         <button class="btn">
    <span class="play"></span>
    <span class="small-box"></span>
  </button>

         </div>
         <div>

        <h2 className="subhead">Subheading</h2>
         </div>
         
         
        <p className="psub">this is a sub heading</p>

        <Rightbody />
        <Footer />
        </div>
        
      );
}
 
export default Body;