import {useRoutes} from 'react-router-dom'
import routesConfig  from './router-config';

const RouterRender = ()=>{

    const routes = useRoutes(routesConfig)
    return routes;
}
export default RouterRender ;