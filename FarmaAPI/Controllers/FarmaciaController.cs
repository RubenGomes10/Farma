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
        // GET: api/farmacia
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
                    NomeDistrito = x.Distrito
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

        // GET: api/farmacia/:id
        [HttpGet]
        [Authorize(Roles = "Admin, User")]
        public Farmacia Get(int id)
        {
            Farmacia farmacia = _repository.FarmaciaRepository.GetById(id);
            return farmacia;
        }

        // POST: api/farmacia
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public void Create([FromBody]Farmacia farmacia)
        {
            _repository.FarmaciaRepository.Insert(farmacia);
            _repository.Commit();
        }

        // POST: api/farmacia/:id
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public void Edit(int id, [FromBody]Farmacia edit_farmacia)
        {
            Farmacia farmacia = _repository.FarmaciaRepository.GetById(id);
            farmacia.Nome = edit_farmacia.Nome;
            farmacia.Distrito = edit_farmacia.Distrito;
			farmacia.TipoClienteID = edit_farmacia.TipoClienteID;
			farmacia.CodigoANF = edit_farmacia.CodigoANF;
			farmacia.NumClienteSAP = edit_farmacia.NumClienteSAP;
			farmacia.ZonaID = edit_farmacia.ZonaID;
			farmacia.Activo = edit_farmacia.Activo;
			farmacia.NumReqInicial = edit_farmacia.NumReqInicial;
			farmacia.DataInicioContrato = edit_farmacia.DataInicioContrato;
			farmacia.DataRescisao = edit_farmacia.DataRescisao;
			farmacia.Hold = edit_farmacia.Hold;
			farmacia.OnHoldReason = edit_farmacia.OnHoldReason;
			farmacia.Morada = edit_farmacia.Morada;
			farmacia.Localidade = edit_farmacia.Localidade;
			farmacia.CodigoPostal = edit_farmacia.CodigoPostal;
			farmacia.LocalidadePostal = edit_farmacia.LocalidadePostal;
			farmacia.Concelho = edit_farmacia.Concelho;
			farmacia.ProprietarioFacturacao = edit_farmacia.ProprietarioFacturacao;
			farmacia.NIF = edit_farmacia.NIF;
			farmacia.DirTecnico = edit_farmacia.DirTecnico;
			farmacia.Telefone = edit_farmacia.Telefone;
			farmacia.Fax = edit_farmacia.Fax;
			farmacia.Email = edit_farmacia.Email;
			farmacia.AgenteID = edit_farmacia.AgenteID;
			farmacia.KitEntregue = edit_farmacia.KitEntregue;
			farmacia.DataEntregaKit = edit_farmacia.DataEntregaKit;
			farmacia.KitRecolhido = edit_farmacia.KitRecolhido;
			farmacia.DataRecolhaKit = edit_farmacia.DataRecolhaKit;
			farmacia.GpsIssues = edit_farmacia.GpsIssues;
			farmacia.EspacoRenovado = edit_farmacia.EspacoRenovado;
			farmacia.NumFuncionarios = edit_farmacia.NumFuncionarios;

            _repository.Commit();
        }

        // DELETE: api/farmacia/5
        public void Delete(int id)
        {
            _repository.FarmaciaRepository.Delete(id);
            _repository.Commit();
        }
    }
}
