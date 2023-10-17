import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import { unauthorized } from 'Config/display'

export default class AuthMicroservice {
  public async handle({ request, response, logger }: HttpContextContract, next: () => Promise<void>) {   

    if(request.header('X-APP-Key','')!==Env.get('APP_KEY')){
      logger.warn({warn: unauthorized,headers: request.headers()}, 'Request MiddlewareServices')
      response.unauthorized({ error: unauthorized })
      return
    }

    await next()
  }
}
