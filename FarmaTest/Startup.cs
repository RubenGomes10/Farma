using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FarmaTest.Startup))]
namespace FarmaTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
