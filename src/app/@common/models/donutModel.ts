export class DonutModel {

  constructor(init?: Partial<DonutModel>) {
    Object.assign(this, init)
  }

  title: string = '';
  values: DonutDataModel[] = [];
}

export class DonutDataModel {
  constructor(init?: Partial<DonutDataModel>) {
    Object.assign(this, init)
  }

  name: string = '';
  value: number = 0
}
