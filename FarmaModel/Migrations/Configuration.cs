namespace FarmaModel.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FarmaModel.FarmaModelContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "FarmaModel.FarmaModelContext";
        }

        protected override void Seed(FarmaModel.FarmaModelContext context)
        {
            context.TipoCliente.AddOrUpdate(
                tc => tc.Nome,
                new TipoCliente { Nome = "Tipo 1" },
                new TipoCliente { Nome = "Tipo 2" },
                new TipoCliente { Nome = "Tipo 3" }
            );

            context.Zona.AddOrUpdate(
                z => z.Nome,
                new Zona { Nome = "Zona 1" },
                new Zona { Nome = "Zona 2" },
                new Zona { Nome = "Zona 3" }
            );

            context.Agente.AddOrUpdate(
                a => a.Nome,
                new Agente { Nome = "Agente 1" },
                new Agente { Nome = "Agente 2" },
                new Agente { Nome = "Agente 3" }
            );

            context.SaveChanges();
        }
    }
}
