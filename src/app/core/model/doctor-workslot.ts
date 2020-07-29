import {Doctor} from '@core/model/doctor';

export class DoctorWorkslot {
    private _id: string;
    private _doctor: Doctor;
    private _start_time: string;
    private _end_time: string;
    private _capacity: number;

    constructor(id: string, doctor: Doctor, start_time: string, end_time: string, capacity: number) {
        this._id = id;
        this._doctor = doctor;
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

    get doctor(): Doctor {
        return this._doctor;
    }

    set doctor(value: Doctor) {
        this._doctor = value;
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
