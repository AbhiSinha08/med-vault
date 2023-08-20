import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import DashboardDoctor from "./DoctorComponent";
// import { Link } from "react-router-dom";
// import {Card, CardHeader, CardBody } from "shards-react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";

// const carouselItems = [
//     {
//         src: require("assets/img/denys.jpg"),
//         altText: "Slide 1",
//         caption: "Big City Life, United States",
//     },
//     {
//         src: require("assets/img/fabien-bazanegue.jpg"),
//         altText: "Slide 2",
//         caption: "Somewhere Beyond, United States",
//     },
//     {
//         src: require("assets/img/mark-finn.jpg"),
//         altText: "Slide 3",
//         caption: "Stocks, United States",
//     },
// ];

let ps = null;

const reportsData = [
  {
    id: 1,
    name: "ABC",
    abhaID: "123456789000",
    date: "12-08-2023",
    photos: [
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    ],
    notes:
      "Ipsum adipisicing aliqua officia velit sunt dolor qui Lorem reprehenderit deserunt anim duis. Commodo exercitation voluptate tempor laboris ad aute dolore. Ullamco duis sint incididunt sunt laborum quis in officia culpa esse qui pariatur deserunt. Sint sunt pariatur incididunt proident sunt.",
  },
  {
    id: 2,
    name: "XYZ",
    abhaID: "123456789000",
    date: "14-08-2023",
    photos: [
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    ],
    notes:
      "Ipsum adipisicing aliqua officia velit sunt dolor qui Lorem reprehenderit deserunt anim duis. Commodo exercitation voluptate tempor laboris ad aute dolore. Ullamco duis sint incididunt sunt laborum quis in officia culpa esse qui pariatur deserunt. Sint sunt pariatur incididunt proident sunt.",
  },
];

export default function ProfilePage() {
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

  const [doctorName, setdoctorName] = React.useState("Doctor Name");
  // const [doctorAge, setdoctorAge] = React.useState(21);
  const [username, setUsername] = React.useState("abc@123");
  const [patientGender, setPatientGender] = React.useState("Male");
  const [doctorAbhaID, setdoctorAbhaID] = React.useState("123456789000");
  const [specialization, setSpecialization] = React.useState("Dermatologist");
  const [reports, setReports] = React.useState([]);

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

  React.useEffect(() => {
    if (search) {
      setReports((prev) => {
        return prev.filter((report) => {
          if (
            report.name.toLowerCase().includes(search.toLowerCase()) ||
            report.abhaID.toLowerCase().includes(search.toLowerCase())
          )
            return true;
          return false;
        });
      });
    } else setReports(reportsData); // To Fetch
  }, [search]);

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
            <div className="rounded-lg bg-purple-600/50 text-center p-4 flex flex-col gap-1 items-center">
              {/* Patient Details */}
              <img
                alt=""
                className="rounded-full h-24 w-24"
                src={require("../../assets/img/doctor.jpg")}
              />
              <span className="font-semibold text-lg"> {doctorName} </span>
              <span>username: {username}</span>
              <span> Abha ID: {doctorAbhaID} </span>
              <span>Specialization: {specialization}</span>
            </div>
            <div className="rounded-lg bg-purple-600/50 text-center p-4 flex flex-col gap-4 items-center">
              {/* Appointment */}
              <span className="font-semibold text-lg"> Live Cases </span>
              {/* <select name="Doctors" id="Doctors">
                                {doctors.map((e) => (
                                    <option value={e.id} key={e.id}> {e.name} </option>
                                ))}
                            </select> */}
              {/* <input type="date" />
                            <Button color="primary" className="font-semibold px-3 py-2">
                                Request Appointment
                            </Button> */}
              <DashboardDoctor></DashboardDoctor>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[70%]">
            <div className="w-full text-start">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border-none text-white/80 px-3 py-2 rounded-lg"
                placeholder="Search by Patient History..."
              />
            </div>
            <div className="rounded-lg bg-purple-600/50 p-4 flex flex-col-reverse gap-8 items-center">
              {/* Reports */}
              {reports.map((e) => (
                <div
                  key={e.id}
                  className="flex flex-col gap-1 rounded-lg border-[#1D8CF8] border px-3 py-2 w-full"
                >
                  <div className="flex justify-between w-full items-start">
                    <div>
                      <span className="font-semibold text-lg">
                        {" "}
                        Patient: {e.name}{" "}
                      </span>{" "}
                      <br /> Abha ID: {e.abhaID}
                    </div>
                    <span className="font-semibold"> {e.date} </span>
                  </div>
                  <hr className="border-white w-[80%] rounded-full" />
                  <p>{e.notes}</p>
                  <div className="flex gap-3">
                    {e.photos.map((e, i) => (
                      <a href={e} target="_blank">
                        <img
                          className="rounded-lg object-cover w-32 h-32"
                          src={e}
                          key={i}
                          alt=""
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
