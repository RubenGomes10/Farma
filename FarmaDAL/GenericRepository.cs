﻿using FarmaModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FarmaDAL
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        internal FarmaModelContext _dbcontext;
        internal DbSet<T> _dbSet;
        public GenericRepository(FarmaModelContext dbcontext)
        {
            this._dbcontext = dbcontext;
            this._dbSet = dbcontext.Set<T>();
        }

        #region IGenericRepository Implementation
        public virtual void Insert(T entity)
        {
            _dbSet.Add(entity);
        }

        public virtual void Delete(int id)
        {
            T objectToDelete = _dbSet.Find(id);
            Delete(objectToDelete);
        }

        public virtual void Delete(T objectToDelete){
            if (_dbcontext.Entry(objectToDelete).State == EntityState.Detached)
            {
                _dbSet.Attach(objectToDelete);
            }
            _dbSet.Remove(objectToDelete);
        }

        public virtual IQueryable<T> SearchFor(System.Linq.Expressions.Expression<Func<T, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public virtual IQueryable<T> GetAll()
        {
            return _dbSet;
        }

        public virtual T GetById(int id)
        {
            return _dbSet.Find(id);
        }
        #endregion
    }
}
