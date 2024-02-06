import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="Contact-info">
        <div className="container-fluid">
          <div className="row mx-auto">
            {/* <div class="col-sm-4">.col-sm-4</div>
                        <div class="col-sm-4">.col-sm-4</div>
                        <div class="col-sm-4">.col-sm-4</div> */}
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone number */}
              <div className="Contact-item  d-flex  align-item-center">
                <span class="material-symbols-outlined">phone_in_talk</span>
                <div className="Contact-info-content">
                  <div className="Contact-info-title">Phone:</div>
                  <div className="Contact-info-text">+91 9763277263</div>
                </div>
              </div>
              <div className="Contact-item  d-flex justify-content-start align-item-center ">
                <span class="material-symbols-outlined">mail</span>
                <div className="Contact-info-content">
                  <div className="Contact-info-title">Email:</div>
                  <div className="Contact-info-text">
                    sagarbhalerao9763@gmail.com
                  </div>
                </div>
              </div>
              <div className="Contact-item d-flex justify-content-start align-item-center ">
                <span class="material-symbols-outlined">home</span>
                <div className="Contact-info-content">
                  <div className="Contact-info-title">Address:</div>

                  <div className="Contact-info-text">Pune,chandan-nagar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-form-container">
                <div className="form-title">Get in touch</div>
                <form id="contact-form">
                  <div className="contact-form-name d-flex justify-content-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="input-name"
                      placeholder="Your name"
                      required
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      className="input-name"
                      placeholder="Your email"
                      required
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="input-name"
                      placeholder="Your phone"
                      required
                    />
                  </div>
                  <div className="contact-form-text mt-4">
                    <textarea
                      className="text-field contact-form-text"
                      placeholder="Message"
                      cols="30"
                      rows="10"
                    />
                  </div>
                  <div className="contact-from-button">
                    <button type="submit" className="btn btn-primary">
                      send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
