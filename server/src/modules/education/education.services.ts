import Education, { IEducation } from "./education.model";

class EducationServices {
  private model = Education;

  async create(payload: IEducation) {
    return this.model.create(payload);
  }

  async readAll() {
    return this.model.find();
  }
}

const educationServices = new EducationServices();
export default educationServices;