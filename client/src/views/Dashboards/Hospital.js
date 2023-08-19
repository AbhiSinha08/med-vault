import React, { useState } from "react";
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

// const reportsData = [
//   {
//     id: 1,
//     name: "Dr. Abhinav Kumar",
//     spec: "General Medicine",
//     date: "12-08-2023",
//     photos: [
//       "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//       "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//     ],
//     notes:
//       "Ipsum adipisicing aliqua officia velit sunt dolor qui Lorem reprehenderit deserunt anim duis. Commodo exercitation voluptate tempor laboris ad aute dolore. Ullamco duis sint incididunt sunt laborum quis in officia culpa esse qui pariatur deserunt. Sint sunt pariatur incididunt proident sunt.",
//   },
//   {
//     id: 2,
//     name: "Dr. Abhinav Kumar",
//     spec: "General Medicine",
//     date: "14-08-2023",
//     photos: [
//       "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//       "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//     ],
//     notes:
//       "Ipsum adipisicing aliqua officia velit sunt dolor qui Lorem reprehenderit deserunt anim duis. Commodo exercitation voluptate tempor laboris ad aute dolore. Ullamco duis sint incididunt sunt laborum quis in officia culpa esse qui pariatur deserunt. Sint sunt pariatur incididunt proident sunt.",
//   },
// ];

const DoctorsData = [
  {
    id: 1,
    name: "Dr. Abhinav Kumar",
    spec: "General Medicine",
    experience: 69,
    abha_id: "123456789@abha",
    gender: "male",
    photo:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
  },
  {
    id: 2,
    name: "Dr. Hriday Ahuja",
    spec: "pulmonologist",
    experience: 69,
    abha_id: "123456789@abha",
    gender: "male",
    photo:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
  },
];

const AppointmentData = [
  {
    id: 1,
    name: "Dr. Abhinav Kumar",
    spec: "General Medicine",
    abha_id: "123456789@abha",
    patient: "raghav bahiti",
    patient_abha_id: "123456789@abha",
    date: "12/2/23",
   
  },
  {
    id: 2,
    name: "Dr. Hriday Ahuja",
    spec: "pulmonologist",
    abha_id: "123456789@abha",
    patient: "ankit rao",
    date: "12/2/23",
    patient_abha_id: "123456789@abha",
  },
];
export default function Hospital() {
  const [activeSection, setActiveSection] = useState("Doctors");

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    // Perform your desired actions or function here
    console.log(`Clicked on section: ${sectionName}`);
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);

  const [hospitalName, setHospitalName] = React.useState("Hospital Name");
  const [address, setAddress] = React.useState(
    "tesri kholi , jaam Nagar , lodapur"
  );
  const [patientGender, setPatientGender] = React.useState("Male");
  const [hospitalAbhaID, setHospitalAbhaID] = React.useState("123456789000");
  const [reports, setReports] = React.useState([]);
  const [acceptedRequest, setAcceptedRequest] = React.useState([]);
  const [declinedRequest, setDeclinedRequest] = React.useState([]);

  const [doctors, setDoctors] = React.useState([
    {
      id: "id",
      name: "Dr. name 1",
    },
    {
      id: "id2",
      name: "Dr. name 2",
    },
  ]);

  const [search, setSearch] = React.useState("");

  const handleActionClick = (id, action) => {
    if (action === "approve") {
      setAcceptedRequest((prevRequests) => [...prevRequests, id]);
      console.log(acceptedRequest);
    } else if (action === "decline") {
      setDeclinedRequest((prevRequests) => [...prevRequests, id]);
    }
  };

  React.useEffect(() => {
    console.log(acceptedRequest);
  }, [acceptedRequest]);

  //   React.useEffect(() => {
  //     if (search) {
  //       setReports((prev) => {
  //         return prev.filter((report) => {
  //           if (
  //             report.name.toLowerCase().includes(search.toLowerCase()) ||
  //             report.spec.toLowerCase().includes(search.toLowerCase())
  //           )
  //             return true;
  //           return false;
  //         });
  //       });
  //     } else{
  //         if(activeSection==="Doctors"){
  //             setReports(DoctorsData);
  //         }
  //         else{
  //             setReports(AppointmentData);
  //         }
  //     }
  //   }, [search]);


  return (
    <>
      <div className="mt-32 text-white mx-20 rounded-lg">
        <img
          alt="..."
          className="path -z-10"
          src={require("assets/img/path4.png")}
        />
        <Container className="flex justify-between gap-6 mb-8">
          <div className="flex flex-col justify-start w-[30%] gap-6 mt-[3.75rem]">
            {/* left column */}
            {/* Patient Details */}
            <div className="rounded-lg bg-purple-600/50 text-center p-4 flex flex-col gap-1 items-center">
              <img
                alt=""
                className="rounded-full h-24 w-24"
                src={require("../../assets/img/mike.jpg")}
              />
              <span className="font-semibold text-lg"> {hospitalName} </span>
              <span className="text-white/70"> {address}</span>
              <span> Abha ID: {hospitalAbhaID} </span>
            </div>
            {/* Appointment */}

            {/* <div className="rounded-lg bg-purple-600/50 text-center p-4 flex flex-col gap-4 items-center">
              <span className="font-semibold text-lg">
                {" "}
                Book an Appointment{" "}
              </span>
              <select name="Doctors" id="Doctors">
                {doctors.map((e) => (
                  <option value={e.id} key={e.id}>
                    {" "}
                    {e.name}{" "}
                  </option>
                ))}
              </select>
              <input type="date" />
              <Button color="primary" className="font-semibold px-3 py-2">
                Request Appointment
              </Button>
            </div> */}
          </div>

          <div className="flex flex-col gap-6 w-[70%]">
            <div className="flex justify-between w-full items-center">
              <div
                className={`cursor-pointer ${
                  activeSection === "Doctors" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => handleSectionClick("Doctors")}
              >
                <span className="font-semibold text-lg">Doctors</span>
              </div>
              <div
                className={`cursor-pointer ${
                  activeSection === "Appointnments"
                    ? "text-blue-500"
                    : "text-black"
                }`}
                onClick={() => handleSectionClick("Appointnments")}
              >
                <span className="font-semibold text-lg">Appointnments</span>
              </div>
              <span className="font-semibold">12/2/23</span>
            </div>
            <div className="w-full text-start">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border-none text-white/80 px-3 py-2 rounded-lg"
                placeholder="Search by Doctor or Specialization..."
              />
            </div>
            <div className="rounded-lg bg-purple-600/50 p-8 flex gap-8 items-center">
              {activeSection === "Doctors" ? (
                <>
                  {DoctorsData.map((e) => (
                    <div
                      key={e.id}
                      className="flex flex-col gap-1 rounded-lg border-[#1D8CF8] border px-3 py-2 w-1/3"
                    >
                      <img
                        className="rounded-lg object-cover w-32 h-32"
                        src={e.photo}
                        key={e.id}
                        alt=""
                      />
                      <div className="flex justify-between w-full items-start">
                        <div>
                          <span className="font-semibold text-lg">
                            {" "}
                            {e.name}{" "}
                          </span>{" "}
                          <br />
                          {e.spec}
                        </div>
                      </div>
                      <p>{e.experience}</p>
                      <p>{e.abha_id}</p>
                      <p>{e.gender}</p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {AppointmentData.map((e) => (
                    <div
                      key={e.id}
                      className="flex flex-col gap-1 rounded-lg border-[#1D8CF8] border px-3 py-2 w-full"
                    >
                      <div className="flex justify-between w-full items-start">
                        <div>
                          <span className="font-semibold text-lg">
                            {" "}
                            {e.name}{" "}
                          </span>{" "}
                          <br />
                          {e.spec}
                        </div>
                        <span className="font-semibold"> {e.date} </span>
                      </div>
                      <hr className="border-white w-[80%] rounded-full" />
                      
                      <p>{e.patient}</p>
                      <p>Doctor-Abha-Id: {e.abha_id}</p>
                      <p>Patient-Abha-Id: {e.patient_abha_id}</p>
                      {!acceptedRequest.includes(e.id) &&
                      !declinedRequest.includes(e.id) ? (
                        <>
                          <button
                            className="bg-green-500 text-white px-2 py-1 rounded"
                            onClick={() => handleActionClick(e.id, "approve")}
                          >
                            Approve
                          </button>
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => handleActionClick(e.id, "decline")}
                          >
                            Decline
                          </button>
                        </>
                      ) : (
                        <div>
                          {acceptedRequest.includes(e.id) && (
                            <span>Approved</span>
                          )}
                          {declinedRequest.includes(e.id) && (
                            <span>Declined</span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
