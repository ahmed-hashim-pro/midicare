import {Doctor} from '@core/model/doctor';
import {SessionType} from '@core/model/session';

export class DoctorWorkslot {
    private _id: string;
    private _doctor: Doctor;
    private _startTime: string;
    private _endTime: string;
    private _capacity: number;
    private _allowedSessions : SessionType[];

    constructor(id: string, doctor: Doctor, start_time: string, end_time: string, capacity: number,
                allowedSessions: SessionType[]) {
        this._id = id;
        this._doctor = doctor;
        this._startTime = start_time;
        this._endTime = end_time;
        this._capacity = capacity;
        this._allowedSessions = allowedSessions;
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

    get capacity(): number {
        return this._capacity;
    }

    set capacity(value: number) {
        this._capacity = value;
    }

    get allowedSessions(): SessionType[] {
        return this._allowedSessions;
    }

    set allowedSessions(value: SessionType[]) {
        this._allowedSessions = value;
    }
}
