import {Doctor} from '@core/model/doctor';
import {Patient} from '@core/model/patient';

export enum SessionStatus {
    'REQUESTED',
    'ACCEPTED',
    'REJECTED',
    'CANCELED',
    'SUCCESSFUL',
    'DISPUTED'
}

export enum SessionType {
    AUDIO = "AUDIO",
    VIDEO = "VIDEO",
    TEXT = "TEXT"
}


export class Session {

    private _id: string;
    private _doctor: Doctor;
    private _patient: Patient;
    private _startTime: string;
    private _endTime: string;
    private _status: SessionStatus;
    private _type: SessionType;

    constructor(id: string, doctor: Doctor, patient: Patient, start_time: string, end_time: string,
                status: SessionStatus, type: SessionType) {
        this._id = id;
        this._doctor = doctor;
        this._patient = patient;
        this._startTime = start_time;
        this._endTime = end_time;
        this._status = status;
        this._type = type;
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

    get startTime(): string {
        return this._startTime;
    }

    set startTime(value: string) {
        this._startTime = value;
    }

    get endTime(): string {
        return this._endTime;
    }

    set endTime(value: string) {
        this._endTime = value;
    }

    get status(): SessionStatus {
        return this._status;
    }

    set status(value: SessionStatus) {
        this._status = value;
    }

    get type(): SessionType {
        return this._type;
    }

    set type(value: SessionType) {
        this._type = value;
    }
}
