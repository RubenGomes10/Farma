using FarmaAPI.ViewModel;
using FarmaDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Linq.Dynamic;
using FarmaModel;

namespace FarmaAPI.Controllers
{

    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class FarmaciaController : ApiController
    {
        private IUnitOfWork _repository;
        public FarmaciaController(IUnitOfWork repository)
        {
            this._repository = repository;
        }
        // GET: Farmacia
        [Authorize]
        public IHttpActionResult Get(int start, int number, string sortField, string sortDir)
        {
            var query = _repository.FarmaciaRepository.GetAll();
            IEnumerable<FarmaciaViewModel> listaFarmacias = query.OrderBy(sortField + " " + sortDir)
                .Skip(start)
                .Take(number)
                .Select(x => new FarmaciaViewModel
                {
                    ID = x.FarmaciaID,
                    Nome = x.Nome,
                    NomeDistrito = x.Distrito.Nome
                });
            int totalRecords = _repository.FarmaciaRepository.GetAll().Count();

            FarmaciaListViewModel listaFarmaciasTable = new FarmaciaListViewModel { 
                FarmaciaList = listaFarmacias, 
                TotalRecords = totalRecords 
            };

            if (totalRecords != 0)
            {
                return Ok(listaFarmaciasTable);
            }
            return BadRequest("Não foram encontrados dados");
        }

        [HttpGet]
        [Authorize(Roles = "Admin, User")]
        public FarmaciaViewModel Get(int id)
        {
            var farmaDetail = _repository.FarmaciaRepository.GetById(id);
            FarmaciaViewModel farmacia = new FarmaciaViewModel
            {
                ID = farmaDetail.FarmaciaID,
                Nome = farmaDetail.Nome,
                NomeDistrito = farmaDetail.Distrito.Nome
            };
            return farmacia;
        }

        // POST: api/test
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/test/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/test/5
        public void Delete(int id)
        {
        }
    }
}
