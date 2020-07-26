
export class DoctorWorkslot {
    private _id: string;
    private _doctorid: string;
    private _start_time: string;
    private _end_time: string;
    private _capacity: number;

    constructor(id: string, doctorid: string, start_time: string, end_time: string, capacity: number) {
        this._id = id;
        this._doctorid = doctorid;
        this._start_time = start_time;
        this._end_time = end_time;
        this._capacity = capacity;
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get doctorid(): string {
        return this._doctorid;
    }

    set doctorid(value: string) {
        this._doctorid = value;
    }

    get start_time(): string {
        return this._start_time;
    }

    set start_time(value: string) {
        this._start_time = value;
    }

    get end_time(): string {
        return this._end_time;
    }

    set end_time(value: string) {
        this._end_time = value;
    }

    get capacity(): number {
        return this._capacity;
    }

    set capacity(value: number) {
        this._capacity = value;
    }
}
