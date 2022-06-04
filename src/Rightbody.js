import "./Rightbody.css";
import {useState} from "react";
import Modal from "./Signup";
const Rightbody = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="rightcon">
      
      
        <h2 className="h2">Sign Up</h2>
        <button class="btn-login btn-facebook">
          <span class="btn-text">Login with Facebook</span>
          <span class="btn-login-logo">f</span>
        </button>
      <p>Sign up with facebook and get exclusive offers <br></br> from our store. You can also sign up with your Email.</p>
      
     
      <div className="bord1" ></div>
      <p className="p3">Or</p>
      <div className="bord2"></div>
      <br></br>
      <br></br>
      <div className="Emailb">

        <button class="btn-login2 btn-email"
         onClick={() => {
          setModalOpen(true);
        }}
        >
            <span class="btn-text2">Sign up with  Email</span>
          
          </button>
  
  
        </div>
        {modalOpen && <Modal closeModal={setModalOpen} />}
      <br></br>
      <br></br>
    </div>
  );
};

export default Rightbody;
