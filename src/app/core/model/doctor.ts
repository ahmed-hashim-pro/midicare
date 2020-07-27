export class Doctor {
    private _name : string;
    private _insurance : string[];
    private _description : string;
    private _specializations : string[];
    private _id : string

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

    constructor(id: string, name: string, insurance: string[], description: string, specializations: string[]) {
        this._name = name;
        this._insurance = insurance;
        this._description = description;
        this._specializations = specializations;
        this._id = id;
    }

    addInsurace (insurance: string) {
        this._insurance.push(insurance);
    }

    removeInsurance(insurance: string) {
        this._insurance = this._insurance.filter(
            (curr) => {
                return curr != insurance;
            }
        );
    }

    addSpecialization (specialization: string) {
        this._specializations.push(specialization);
    }

    removeSpecialization (specialization: string) {
        this._specializations = this._specializations.filter(
            (curr) => {
                return curr != specialization;
            }
        );
    }
}
