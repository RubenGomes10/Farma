using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using Microsoft.Practices.Unity;
using FarmaDAL;
using FarmaModel;
using FarmaAPI.Resolver;
using System.Net.Http.Headers;

namespace FarmaAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            //Unity
            var container = new UnityContainer();
            container.RegisterType<IUnitOfWork, UnitOfWork>(new HierarchicalLifetimeManager());
            container.RegisterType<IGenericRepository<Farmacia>, GenericRepository<Farmacia>>(new HierarchicalLifetimeManager());
            config.DependencyResolver = new UnityResolver(container); 

            //Formatters
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            // Web API routes
            config.MapHttpAttributeRoutes();
            config.EnableCors();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

        }
    }
}
