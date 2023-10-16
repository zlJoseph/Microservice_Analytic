import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@ioc:Adonis/Lucid/Orm'

export default class Analytic extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public count: number

  @column()
  public sum_age: number

  @column()
  public sum_age_squared: number

  @computed()
  public get average_age(){
    return this.count<=0?0:this.sum_age/this.count
  }

  @computed()
  public get age_std_desviation(){
    const c = this.sum_age_squared-(this.sum_age*this.sum_age/this.count)
    return this.count<=0?0:Math.sqrt(c/this.count).toFixed(4)
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
