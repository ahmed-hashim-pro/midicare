import {Doctor} from '@core/model/doctor';
import {Patient} from '@core/model/patient';
import {SessionStatus} from "@core/model/session-status";

export class DoctorTextSession {
    private _id: string;
    private _doctor: Doctor;
    private _patient: Patient;
    private _start_time: string;
    private _end_time: string;
    private _status: SessionStatus;

    constructor(id: string, doctor: Doctor, patient: Patient, start_time: string, end_time: string,
                status: SessionStatus) {
        this._id = id;
        this._doctor = doctor;
        this._patient = patient;
        this._start_time = start_time;
        this._end_time = end_time;
        this._status = status;
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

    get patient(): Patient {
        return this._patient;
    }

    set patient(value: Patient) {
        this._patient = value;
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

    get status(): SessionStatus {
        return this._status;
    }

    set status(value: SessionStatus) {
        this._status = value;
    }
}
