import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import { unauthorized } from 'Config/display';

export default class Auth {
  public async handle({ response, request, logger }: HttpContextContract, next: () => Promise<void>) {

    if(Env.get('NODE_ENV') !== 'production'){
      const method = request.method();
      const url = request.completeUrl()
      const headers = request.headers();
      const body = request.body()
      logger.info({ method, url, headers, body }, 'Request Middleware');
    }

    if(request.header('X-API-Key','') !== Env.get('API_KEY')){
      response.unauthorized({ error: unauthorized })
      return
    }
    
    await next()
  }
}
