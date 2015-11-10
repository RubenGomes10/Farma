namespace FarmaModel
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class FarmaModelContext : DbContext
    {
        // Your context has been configured to use a 'FarmaModel' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'FarmaModel.FarmaModel' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'FarmaModel' 
        // connection string in the application configuration file.
        public FarmaModelContext(string connectionString)
            : base(connectionString)
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        public virtual DbSet<Farmacia> Farmacia { get; set; }
        public virtual DbSet<Distrito> Distrito { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}