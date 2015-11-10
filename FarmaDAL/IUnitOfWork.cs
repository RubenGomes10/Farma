using FarmaModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FarmaDAL
{
    public interface IUnitOfWork
    {
        void Commit();
        IGenericRepository<Farmacia> FarmaciaRepository { get; }
    }
}
