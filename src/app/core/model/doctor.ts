export class Doctor {
  private _name: string;
  private _email: string;
  private _title: string;
  private _mobileNumber: string;
  private _facebookPage: string;
  private _medicalLicsenceImage: string;
  private _medicalLicsenceNumber: string;
  private _clinicalAddress: string;
  private _clinicalPhone: string;
  private _insurance: string[];
  private _description: string;
  private _specializations: string[];
  private _id: string;

	constructor(id: string,name: string, insurance: string[], description: string, specializations: string[],  email: string, title: string, mobileNumber: string, facebookPage: string, medicalLicsenceImage: string, medicalLicsenceNumber: string, clinicalAddress: string, clinicalPhone: string) {
		this._name = name;
		this._email = email;
		this._title = title;
		this._mobileNumber = mobileNumber;
		this._facebookPage = facebookPage;
		this._medicalLicsenceImage = medicalLicsenceImage;
		this._medicalLicsenceNumber = medicalLicsenceNumber;
		this._clinicalAddress = clinicalAddress;
		this._clinicalPhone = clinicalPhone;
		this._insurance = insurance;
		this._description = description;
		this._specializations = specializations;
		this._id = id;
    }


  



   get email(): string {
    return this._email;
  }

   set email(email: string) {
    this._email = email;
  }

   get title(): string {
    return this._title;
  }

   set title(title: string) {
    this._title = title;
  }

   get mobileNumber(): string {
    return this._mobileNumber;
  }

   set mobileNumber(mobileNumber: string) {
    this._mobileNumber = mobileNumber;
  }

   get facebookPage(): string {
    return this._facebookPage;
  }

   set facebookPage(facebookPage: string) {
    this._facebookPage = facebookPage;
  }

   get medicalLicsenceImage(): string {
    return this._medicalLicsenceImage;
  }

   set medicalLicsenceImage(medicalLicsenceImage: string) {
    this._medicalLicsenceImage = medicalLicsenceImage;
  }

   get medicalLicsenceNumber(): string {
    return this._medicalLicsenceNumber;
  }

   set medicalLicsenceNumber(medicalLicsenceNumber: string) {
    this._medicalLicsenceNumber = medicalLicsenceNumber;
  }

   get clinicalAddress(): string {
    return this._clinicalAddress;
  }

   set clinicalAddress(clinicalAddress: string) {
    this._clinicalAddress = clinicalAddress;
  }

   get clinicalPhone(): string {
    return this._clinicalPhone;
  }

   set clinicalPhone(clinicalPhone: string) {
    this._clinicalPhone = clinicalPhone;
  }
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get insurance(): string[] {
    return this._insurance;
  }

  set insurance(value: string[]) {
    this._insurance = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get specializations(): string[] {
    return this._specializations;
  }

  set specializations(value: string[]) {
    this._specializations = value;
  }

 
  addInsurace(insurance: string) {
    this._insurance.push(insurance);
  }

  removeInsurance(insurance: string) {
    this._insurance = this._insurance.filter((curr) => {
      return curr != insurance;
    });
  }

  addSpecialization(specialization: string) {
    this._specializations.push(specialization);
  }

  removeSpecialization(specialization: string) {
    this._specializations = this._specializations.filter((curr) => {
      return curr != specialization;
    });
  }
}
