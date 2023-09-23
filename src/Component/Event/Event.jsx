import { Link } from "react-router-dom";

function Event() {
  return (
    <section className="event-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span></span> Important dates
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
              15 <span>SEP-2023</span>
              </div>
              {/* <p>
                <i className="icon_pin_alt"></i>New York, US
              </p> */}
              <h4>
                First Announcement
              </h4>
              {/* <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
              15<span>DEC-2023</span>
              </div>
              {/* <p>
                <i className="icon_pin_alt"></i>Vancouver, Canada
              </p> */}
              <h4>
                Last date for Abstract Submission 
              </h4>
              {/* <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
                20 <span>DEC-2023</span>
              </div>
              {/* <p>
                <i className="icon_pin_alt"></i>Chicago, US
              </p> */}
              <h4>
                Notification of Acceptance
              </h4>
              {/* <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
                05 <span>JAN-2024</span>
              </div>
              {/* <p>
                <i className="icon_pin_alt"></i>Texas, US
              </p> */}
              <h4>
                Last date for full paper Submission
              </h4>
              {/* <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link> */}
            </div>
          </div>

          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
                25 <span>JAN-2024</span>
              </div>
              {/* <p>
                <i className="icon_pin_alt"></i>Texas, US
              </p> */}
              <h4>
                Program Agenda
              </h4>
              {/* <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link> */}
            </div>
          </div>

          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
                29-30 <span>JAN- 2024</span>
              </div>
              {/* <p>
                <i className="icon_pin_alt"></i>Texas, US
              </p> */}
              <h4>
                Conference dates
              </h4>
              {/* <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link> */}
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12 text-center">
            <Link className="read-more" to="#">
              View all Events<i className="arrow_right"></i>
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Event;
