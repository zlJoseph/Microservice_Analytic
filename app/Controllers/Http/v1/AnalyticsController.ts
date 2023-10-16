import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Analytic from 'App/Models/Analytic'
import { error500, updateSuccess, validateJustNumber } from 'Config/display';

export default class AnalyticsController {
  public async index({ response, logger }: HttpContextContract) {
    try{
      const data = await Analytic.findOrFail(1)
      response.ok(data.serializeComputed())
    }catch(error){
      logger.error({ err: error }, 'Get Analytic');
      response.status(500).send({ message: error500 })
    }
  }

  public async update({ response, request, logger }: HttpContextContract) {
    try {
      const data = await Analytic.findOrFail(1)
      const age = request.input('age',0)
      const regex = /^\d+$/;
      if (!regex.test(age)) {
        logger.info({ message: validateJustNumber('age'), ...request.all()}, 'Update Analytic');
        return response.status(400).send({ message: validateJustNumber('age') });
      }
      data.count = data.count + 1
      data.sum_age = data.sum_age + age
      data.sum_age_squared = data.sum_age_squared + age*age
      data.save()
      response.ok(updateSuccess)
    }catch(error){
      logger.error({ err: error }, 'Update Analytic');
      response.status(500).send({ message: error500 })
    }
  }

}
