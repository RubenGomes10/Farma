using FarmaModel;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FarmaDAL
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private FarmaModelContext _dbContext = new FarmaModelContext(ConfigurationManager.ConnectionStrings["FarmaModel"].ConnectionString);
        private IGenericRepository<Farmacia> _farmaciaRepo;

        public UnitOfWork()
        {
            
        }

        public void Commit()
        {
            _dbContext.SaveChanges();
        }

        public IGenericRepository<Farmacia> FarmaciaRepository
        {
            get
            {
                if (this._farmaciaRepo == null)
                {
                    this._farmaciaRepo = new GenericRepository<Farmacia>(_dbContext);
                }
                return _farmaciaRepo;
            }
        }

        #region IDisposable

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_dbContext != null)
                {
                    _dbContext.Dispose();
                }
            }
        }

        #endregion 
    

    }
}
