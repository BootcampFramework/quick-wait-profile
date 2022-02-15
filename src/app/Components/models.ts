export interface IHospital {
  id: string;
  address: string;
  arrivalTime: string;
  distance: number;
  latitude: number;
  longitude: number;
  name: string;
  timeInSeconds: number;
}

export abstract class AbstractHospital {

  private _address!: string;

  private _arrivalTime!: string;

  private _distance!: number;

  private _latitude!: number;

  private _longitude!: number;

  private _name!: string;

  private _timeInSeconds!: number;

  private _id!: string;




  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }

  public get arrivalTime(): string {
    return this._arrivalTime;
  }
  public set arrivalTime(value: string) {
    this._arrivalTime = value;
  }

  public get distance(): number {
    return this._distance;
  }
  public set distance(value: number) {
    this._distance = value;
  }

  public get latitude(): number {
    return this._latitude;
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public get longitude(): number {
    return this._longitude;
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get timeInSeconds(): number {
    return this._timeInSeconds;
  }
  public set timeInSeconds(value: number) {
    this._timeInSeconds = value;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  constructor(
    { address, arrivalTime, distance, id, latitude, longitude, name, timeInSeconds }: IHospital,
  ) {
    this._address = address;
    this._arrivalTime = arrivalTime;
    this._distance = distance;
    this._latitude = latitude;
    this._longitude = longitude;
    this._name = name;
    this._timeInSeconds = timeInSeconds;
    this._id = id
  }
}


export class HospitalListItem extends AbstractHospital {
  public flag!: string;
  constructor(o: IHospital, flag: string) {
    super(o);
  }

}


