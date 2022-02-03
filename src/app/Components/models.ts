interface PropertiesHospitalListItem {
  foursquare: string;
  landmark: boolean;
  address: string;
  category: string;
  maki: string;
}

export interface IHospitalListItem {
  id: string;
  properties: PropertiesHospitalListItem;
  text_ptPT: string;
  place_name_ptPT: string;
  text: string;
  place_name: string;
  center: number[];
  flag: string;
}

export class HospitalListItem implements IHospitalListItem {
  private _place_name!: string;

  private _place_name_ptPT!: string;

  private _properties!: PropertiesHospitalListItem;

  private _text!: string;

  private _text_ptPT!: string;

  private _center!: number[];

  private _id!: string;

  private _flag!: string;




  public get flag(): string {
    return this._flag;
  }
  public set flag(value: string) {
    this._flag = value;
  }

  public get place_name(): string {
    return this._place_name;
  }
  public set place_name(value: string) {
    this._place_name = value;
  }

  public get place_name_ptPT(): string {
    return this._place_name_ptPT;
  }
  public set place_name_ptPT(value: string) {
    this._place_name_ptPT = value;
  }

  public get properties(): PropertiesHospitalListItem {
    return this._properties;
  }
  public set properties(value: PropertiesHospitalListItem) {
    this._properties = value;
  }
  public get text(): string {
    return this._text;
  }
  public set text(value: string) {
    this._text = value;
  }
  public get text_ptPT(): string {
    return this._text_ptPT;
  }
  public set text_ptPT(value: string) {
    this._text_ptPT = value;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get center(): number[] {
    return this._center;
  }
  public set center(value: number[]) {
    this._center = value;
  }

  constructor(
    { center, id, place_name, properties, text, text_ptPT, place_name_ptPT, flag }: {
      place_name: string,
      place_name_ptPT: string,
      properties: PropertiesHospitalListItem,
      text: string,
      text_ptPT: string,
      center: number[],
      id: string,
      flag: string
    },
  ) {
    this._place_name = place_name;
    this._place_name_ptPT = place_name_ptPT;
    this._properties = properties;
    this._text = text;
    this._text_ptPT = text_ptPT;
    this._center = center;
    this._id = id;
    this._flag = flag
  }
}
