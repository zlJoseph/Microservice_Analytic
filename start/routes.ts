import Route from '@ioc:Adonis/Core/Route'
import { invalidroute, microservicename } from 'Config/display';

Route.group(()=>{
  Route.get('v1/kpis','v1/AnalyticsController.index').middleware('auth')
  Route.put('v1/kpis','v1/AnalyticsController.update').middleware('authmicroservices')
}).prefix("api")

Route.any('/', ({ response }) => {
  response.status(200).send({ message: microservicename });
});

Route.any('*', ({ response }) => {
  response.status(404).send({ message: invalidroute });
});