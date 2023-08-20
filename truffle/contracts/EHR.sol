// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract EHR {
    // each record of a patient
    struct Record {
        string ABHAid;
        address id;
        uint256 date;
        string uploaderName;
        string specialization;
        string[] images;
        string notes;
    }

    // Patient Structure
    struct Patient {
        address id;
        string name;
        string ABHAId;
        string gender;
        uint256 age;
    }

    // Doctor Details Structure
    struct Doctor {
        address id;
        string name;
        string specialization;
        string username;
    }

    // Lab Details Structure
    struct Lab {
        address id;
        string name;
        string phone;
        string add;
        string username;
    }

    struct Result {
        uint256 date;
        string uploaderName;
        string specialization;
        string[] images;
        string notes;
    }

    // dictionaries of Patients, Doctors and Labs

    mapping(address => Patient) public patients;
    mapping(address => Doctor) public doctors;
    mapping(address => Lab) public labs;

    Record[] records;

    // events to emit in case of sign up and add record

    event PatientAdded(address patientId);
    event DoctorAdded(address doctorId);
    event LabAdded(address labId);
    event RecordAdded(address patientId, address doctorId);

    // modifiers

    modifier patientExists(address patientId) {
        require(patients[patientId].id == patientId, "Patient does not exist");
        _;
    }

    modifier senderIsDoctor() {
        require(doctors[msg.sender].id == msg.sender, "Sender is not a doctor");
        _;
    }

    function addPatient(
        string memory _name,
        string memory _ABHAid,
        string memory _gender,
        uint256 _age
    ) public {
        require(
            patients[msg.sender].id != msg.sender,
            "This patient already exists."
        );

        Patient memory patient = Patient(
            msg.sender,
            _name,
            _ABHAid,
            _gender,
            _age
        );
        patients[msg.sender] = patient;
    }

    function addDoctor(
        string memory _name,
        string memory _username,
        string memory _specialization
    ) public {
        require(
            doctors[msg.sender].id != msg.sender,
            "This doctor already exists."
        );

        Doctor memory doctor = Doctor(
            msg.sender,
            _name,
            _specialization,
            _username
        );
        doctors[msg.sender] = doctor;
    }

    function addLab(
        string memory _name,
        string memory _phone,
        string memory _address,
        string memory _username
    ) public {
        require(labs[msg.sender].id != msg.sender, "This lab already exists.");

        Lab memory lab = Lab(msg.sender, _name, _phone, _address, _username);
        labs[msg.sender] = lab;
    }

    function addRecord(
        string[] memory _fileNames,
        string memory _notes,
        address _patientId
    ) public senderIsDoctor patientExists(_patientId) {
        string memory name = doctors[msg.sender].name;
        string memory spec = doctors[msg.sender].specialization;
        string memory patientABHA = patients[_patientId].ABHAId;
        Record memory record = Record(
            patientABHA,
            _patientId,
            block.timestamp,
            name,
            spec,
            _fileNames,
            _notes
        );
        records.push(record);
    }

    function getRecords(address _patientId)
        public
        view
        patientExists(_patientId)
        returns (Result[10] memory)
    {
        Result[10] memory results;
        for (uint256 i = 0; i < records.length; i++) {
            if (records[i].id == _patientId) {
                Result memory res = Result(
                    records[i].date,
                    records[i].uploaderName,
                    records[i].specialization,
                    records[i].images,
                    records[i].notes
                );
                results[i%10] = res;
            }
        }
        return results;
    }
}
