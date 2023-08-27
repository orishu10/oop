//תרגול א
class Shape {
  Info(): string {
    return "this is a shpe";
  }
  draw() {
    console.log("drawing a shape");
  }
}
class Triangle {
  draw() {
    console.log("drawing a triangle");
  }
}
class Circle {
  draw() {
    console.log("drawing a circle");
  }
}
let shapes = [new Triangle(), new Circle()];
function renderShapes(shapes: Shape[]) {
  shapes.forEach((element) => {
    element.draw();
  });
}

class Rectangle extends Shape {
  hight: number;
  width: number;
  constructor(hight: number, width: number) {
    super();
    this.hight = hight;
    this.width = width;
  }
  area(): number {
    return this.hight * this.width;
  }
  Info(): string {
    return "This is a Recktangle";
  }
  scale(parm: number): Rectangle {
    this.hight *= parm;
    this.width *= parm;
    return this;
  }
  static(a: Rectangle, b: Rectangle) {
    return a.area() * b.area();
  }
}

class ColoredRectangle extends Rectangle {
  color: string = "blue";
  constructor(color: string, hight: number, width: number) {
    super(hight, width);
    this.color = color;
  }
  Info(): string {
    return "this is a blue Recktangle ";
  }
}

class Square extends Rectangle {
  constructor(length: number) {
    super(length, length);
  }
}
// תרגול ב
class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Patient extends Person {
  patientID: number;
  constructor(firstName: string, lastName: string, patientID: number) {
    super(firstName, lastName);
    this.patientID = patientID;
  }
  detailsPatiant() {
    console.log(`${this.firstName},' ',${this.lastName},' ',${this.patientID}`);
  }
}

class Doctor extends Person {
  doctorID: number;
  specialization: string;
  constructor(
    firstName: string,
    lastName: string,
    doctorID: number,
    specialization: string
  ) {
    super(firstName, lastName);
    this.doctorID = doctorID;
    this.specialization = specialization;
  }
  detailsDoc() {
    console.log(
      `${this.firstName},' ',${this.lastName},' ',${this.doctorID}' ' ${this.specialization}`
    );
  }
}
class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: number;
  time: number;
  constructor(patient: Patient, doctor: Doctor, date: number, time: number) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }
  detailsApoint() {
    this.doctor.detailsDoc();
    this.patient.detailsPatiant();
    console.log(`${this.date}' ' ${this.time}`);
  }
}

class Hospitol {
  patiants: Patient[];
  doctors: Doctor[];
  appointments: Appointment[];
  name: string;
  constructor(
    patiants: Patient[],
    doctors: Doctor[],
    name: string,
    appointments: Appointment[]
  ) {
    this.patiants = patiants;
    this.doctors = doctors;
    this.appointments = appointments;
    this.name = name;
  }
  addPatient(patient: Patient) {
    this.patiants.push(patient);
  }
  addDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
  }
  addApoint(appointment: Appointment) {
    this.appointments.push(appointment);
  }
  appointmentsDetails() {
    this.appointments.forEach((element) => {
      element.detailsApoint();
    });
  }
  doctorDetails(id: number) {
    this.doctors.find(isId);
  }
}

function isId(doctor: Doctor, id: number): Doctor {
  if (doctor.doctorID === id) {
    doctor.detailsDoc();
    return doctor;
  }
}
