import "./Rightbody.css";

const Modal = ({ closeModal }) => {
  return (
    <div>
      <div className="modal1">
        <br></br>
        <br></br>
        <div className="formbody">
          <button
            className="closebtn"
            onClick={() => {
              closeModal(false);
            }}
          >
            <p className="closetext">X</p>
          </button>
          <div id="titile">
            <h4>
              <strong>SIGN UP HERE</strong>
            </h4>
          </div>
          <div
            id="form-container"
            action="#"
            method="post"
            onsubmit="return validation();"
          >
            <form>
              <div>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  autocomplete="off"
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  autocomplete="off"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email example@vybzgh.com"
                  autocomplete="off"
                />
                <span className="erro1" id="erro"></span>
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  autocomplete="off"
                />
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm password"
                  autocomplete="off"
                />
              </div>

              <div id="show-password">
                <label>Show password</label>
                <input type="checkbox" name="checkbox" onclick="show()" />
              </div>
              <p id="signup">
                By clicking on <strong>Signup</strong> you agree to our
                <a href="#">
                  {" "}
                  <strong>Terms and Conditions</strong>
                </a>
              </p>
              <div>
                <p>
                  <strong>Yes,I Agree</strong>
                  <label class="checkbox">
                    <input type="checkbox" name="checkbox"></input>
                    <br></br>
                  </label>
                </p>
                
                <input type="submit" name="submit" id="submit" value="Signup" />
              </div>
            </form>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Modal;
